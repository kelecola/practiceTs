console.log('start');
var intervalA = setInterval(() => {
    console.log('intervalA');
}, 0);

setTimeout(() => {
    console.log('timeout');

    clearInterval(intervalA);
}, 0);

var intervalB = setInterval(() => {
    console.log('intervalB');
}, 0);

var intervalC = setInterval(() => {
    console.log('intervalC');
}, 0);

new Promise((resolve, reject) => {
    console.log('promise');

    for (var i = 0; i < 10000; ++i) {
        i === 9999 && resolve();
    }

    console.log('promise after for-loop');
}).then(() => {
    console.log('promise1');
}).then(() => {
    console.log('promise2');

    clearInterval(intervalB);
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise in timeout');
        resolve();
    });

    console.log('promise after timeout');
}).then(() => {
    console.log('promise4');
}).then(() => {
    console.log('promise5');

    clearInterval(intervalC);
});

Promise.resolve().then(() => {
    console.log('promise3');
});

console.log('end');