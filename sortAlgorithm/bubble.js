// import { getRandomArr } from './helper'
const getRandomArr = (min = 0, max = 100, len = 10) => {
    return new Array(len).fill(0).map(item => Math.floor((max - min) * Math.random()))
}
const inputArr = getRandomArr()
console.log('inputArr', inputArr);

// 两遍循环冒泡比较
const bubbleSort = arr => {
    const len = arr.length
    let sortedNum = 0
    for (let j = len - 1 - sortedNum; j >= 0 ; --j) {
        for (let i = 0; i < j; ++i) {
            if (arr[i] < arr[i + 1]) continue;
            // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            const temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
        ++sortedNum
    }
    return arr
}

const resArr = bubbleSort(inputArr)

console.log('resArr', resArr);
