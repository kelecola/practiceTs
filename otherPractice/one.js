
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

// const getComboNum = arr => {
//   return arr.sort((a, b) => {
//     a += ''
//     b += ''
//     let index = 0
//     while (a[index] === b[index] && a[index] !== void 0) {
//       ++index;
//     }
//     if (a[index] === void 0) {
//       return b[index] - a[index - 1]
//     }
//     if (b[index] === void 0) {
//       return b[index - 1] - a[index]
//     }
//     return b - a;
//   }).join('')
// }

// console.log(getComboNum([22, 45, 1, 221, 454]));

// 1. 将url中的query部门提取出来以键值对的方式放到一个对象里面去

// const str = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E5%B0%86url%E4%B8%AD%E7%9A%84query%E9%83%A8%E9%97%A8%E6%8F%90%E5%8F%96%E5%87%BA%E6%9D%A5%E4%BB%A5%E9%94%AE%E5%80%BC%E5%AF%B9%E7%9A%84%E6%96%B9%E5%BC%8F%E6%94%BE%E5%88%B0%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E9%87%8C%E9%9D%A2%E5%8E%BB&fenlei=256&rsv_pq=d24904d70082dabd&rsv_t=c49d3PSAGOdV1BnxUoNYl5DM%2FAsn99Agl3JTL2JWkeDL5fWWSF2so7UfXXk&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=2&rsv_sug1=1&rsv_sug7=001&rsv_sug2=0&rsv_btype=i&prefixsug=%25E5%25B0%2586url%25E4%25B8%25AD%25E7%259A%2584query%25E9%2583%25A8%25E9%2597%25A8%25E6%258F%2590%25E5%258F%2596%25E5%2587%25BA%25E6%259D%25A5%25E4%25BB%25A5%25E9%2594%25AE%25E5%2580%25BC%25E5%25AF%25B9%25E7%259A%2584%25E6%2596%25B9%25E5%25BC%258F%25E6%2594%25BE%25E5%2588%25B0%25E4%25B8%2580%25E4%25B8%25AA%25E5%25AF%25B9%25E8%25B1%25A1%25E9%2587%258C%25E9%259D%25A2%25E5%258E%25BB&rsp=5&rsv_sug9=es_0_1&inputT=245&rsv_sug4=245&rsv_sug=9'

// const splitUrl = url => {
//   // 这样去做是ok的,后面的特殊字符会被encode
//   const urlMap = {}
//   const params = url.split('?')[1];
//   params.split('&').forEach(item => {
//     const it = item.split('=')
//     urlMap[it[0]] = decodeURI(it[1])
//   })
//   return urlMap
// }

console.log(splitUrl(str));

// 2. 判断ip地址是否正确

// 谷歌把，百度把