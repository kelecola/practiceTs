
// 1. 使用JS实现一个 repeat 方法 log 4次 hello world, 每次间隔3秒

// let timer = null
// let time = 0

// const repeat = () => {
//     timer = setInterval(() => {
//         console.log('hello world');
//         if (++time === 4) {
//             clearInterval(timer)
//         }
//     }, 3000);
// }

// repeat()

// 3. 简单的，1234567890 -> 1,234,567,890 每千位加个" , "

// const addComma = input => {
//     if (typeof input === 'number') input += ''
//     const len = input.length
//     if (len < 3) return input
//     let count = 0, resStr = ''
//     for (let i = len - 1; i >= 0; --i) {
//         resStr = input[i] + resStr
//         if (++count % 3 === 0) {
//             resStr = ',' + resStr
//             count = 0
//         }
//     }
//     // console.log(resStr);
//     return resStr
// }

// const addComma1 = input => {
//     if (typeof input === 'number') input += ''
//     return input.split('').reverse().reduce((pre, cur, index) => {
//         return (index % 3 ? cur : (cur + ',')) + pre
//     })
// }

// addComma(1234567890)
// console.log(addComma1(1234567890));
// addComma1(1234567890)


// 4. 不能使用全局变量实现调用a()三次得到1，2，1......重复，使用了闭包存一个boolean值

// 感觉像interval,题目没读懂

// 5. 实现 function(func, times, wait ){}，传入func每隔wait时间，执行一次，执行times次

// loop, 有次数限制的

// let timer = null

// function func() {
//     console.log('1')
// }

// const doLoop = (func, times, wait) => {
//     if (times === 0) {
//         clearTimeout(timer)
//         return
//     }
//     timer = setTimeout(() => {
//         func()
//         times-- // 消费次数
//         doLoop(func, times, wait)
//     }, wait);
// }

// doLoop(func, 4, 200)

// 6. 小朋友分饼干
// https://leetcode-cn.com/problems/assign-cookies/

// 7. 第一题：是输入一个数组，返回数组内数字能组成的最大数。

// [1,3,5] = 531
// [1,10,45] = 45110

// 一定规则的排序问题

const getComboNum = arr => {
  return arr.sort((a, b) => {
    a += ''
    b += ''
    let index = 0
    while (a[index] === b[index] && a[index] !== void 0) {
      ++index;
    }
    if (a[index] === void 0) {
      return b[index] - a[index - 1]
    }
    if (b[index] === void 0) {
      return b[index - 1] - a[index]
    }
    return b - a;
  }).join('')
}

console.log(getComboNum([22, 45, 1, 221, 454]));

// 1. 将url中的query部门提取出来以键值对的方式放到一个对象里面去
// 2. 判断ip地址是否正确

