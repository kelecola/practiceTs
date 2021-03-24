// 插入排序
const getRandomArr = (min = 0, max = 100, len = 10) => {
  return new Array(len).fill(0).map(item => Math.floor((max - min) * Math.random()))
}
const inputArr = getRandomArr()
console.log('inputArr', inputArr);

const insertSort = arr => {
  let res = []
  arr.forEach(item => {
    const idx = res.findIndex(val => val > item)
    if (idx === -1) {
      res[res.length] = item // 假如找不到就在末尾添加
    } else {
      res = [...res.slice(0, idx), item, ...res.slice(idx)] // 找到的话在中间插入
    }
  })
  return res
}

const resArr = insertSort(inputArr)

console.log('resArr', resArr);