//                      -- 🐸 我到了 f(6)
//                   --｜ f(5)
//                --｜ f(4)
//             --｜ f(3)
//          --｜ f(2)
//       --｜  f(1)
//   🐸 ｜

// 🐸上楼梯，🐸可以一次跳一台阶也可以跳两个台阶。请问🐸上n个台阶有多少种方法

// 逆向思维走到f(6) = 走到f(4) 跳两层 + 走到f(5) 跳一层
// 所以 f(6) = f(4) + f(5)

// => f(5) = f(4) + f(3) ...

// f(1) = 1 上一层就一种方法
// f(2) = 2 上第二层两种方法


const frogJump = (targetNum) => {
  // console.log('frogJump');
  if (targetNum === 1) {
    return 1
  }
  if (targetNum === 2) {
    return 2
  }
  return frogJump(targetNum - 1) + frogJump(targetNum - 2)
}


const frogJumpDp = (targetNum) => {
  // console.log('frogJumpDp');
  const dpArr = [0, 1, 2]
  if (targetNum >= 3) {
    for (let i = 3; i <= targetNum; ++i) {
      dpArr[i] = dpArr[i - 1] + dpArr[i - 2]
    }
  }
  return dpArr[targetNum]
}

const targetNum = 40
// frogJump(10)
// frogJumpDp(10)
console.time('frogJump')
console.log(frogJump(targetNum));
console.timeEnd('frogJump')

console.time('frogJumpDp')
console.log(frogJumpDp(targetNum), 'dp');
console.timeEnd('frogJumpDp')














// const p = Promise.race([
//   new Promise((resolve, reject) => {
//     frogJumpDp(targetNum)
//     resolve('Dp');
//   }),
//   new Promise((resolve, reject) => {
//     frogJump(targetNum);
//     resolve('111');
//   })
// ])

// p.then(result => console.log(result)).catch(e => console.log(e))