export const getRandomArr = (min = 0, max = 100, len = 10) => {
    return new Array(len).fill(0).map(item => Math.floor((max - min) * Math.random()))
}