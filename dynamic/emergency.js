// https://pintia.cn/problem-sets/994805342720868352/problems/994805523835109376

// As an emergency rescue team leader of a city, 
// you are given a special map of your country. 
// The map shows several scattered cities connected by some roads.
// Amount of rescue teams in each city and the length of 
// each road between any pair of cities are marked on the map. 
// When there is an emergency call to you from some other city,
// your job is to lead your men to the place as quickly as possible, 
// and at the mean time, call up as many hands on the way as possible.

// 作为一个消防员的队长🧯
// 你被赋予了一张特殊的地图
// 这张地图显示了几个分散的城市，它们之间有一些道路相连。
// 每个城市消防队的数量和城市之间相互的距离都被标记在地图上
// 当其他地方发生火灾
// 你的任务是带上你的人尽可能快的到达现场，同时叫上尽可能多的队伍

// Each input file contains one test case. 
// For each test case, the first line contains 4 positive integers: 
// N (≤500) - the number of cities (and the cities are numbered from 0 to N−1), 
// M - the number of roads, C1 and C2 - the cities that you are currently in and that you must save,
//  respectively. The next line contains N integers, 
// where the i-th integer is the number of rescue teams in the i-th city. Then M lines follow, 
// each describes a road with three integers c1, c2 and L,
// which are the pair of cities connected by a road and the length of that road, respectively.
//  It is guaranteed that there exists at least one path from C1 to C2.



// For each test case, print in one line two numbers: 
// the number of different shortest paths between C1 and C2
// ​​ , and the maximum amount of rescue teams you can possibly gather. 
// All the numbers in a line must be separated by exactly one space, 
// and there is no extra space allowed at the end of a line.


// 其实类比开发上面就像上产品给的原型图，晦涩难懂需要拆解需求，不断讨论

// 得出下面的整理结果，再开发效果会比较好

// 题意: 给出N个城市, M条无向边。每个城市中都有一定数目的救援小组，所有边的边权已知
// 现在给出起点和终点，求从起点到终点的最短距离以及最短路径上救援小组数目之和
// 如果有多条最短路径，则输出数目之和最大的

// 5 6 0 2      5个城市，6条路，起点是0号城市，终点是2号城市
// 1 2 1 5 3    0-4号城分别有 [ 1, 2, 1, 5, 3]个小队
// 0 1 1        0号城市到1号城市  距离为1
// 0 2 2        0号城市到2号城市  距离为2
// 0 3 1        0号城市到3号城市  距离为1
// 1 2 1        1号城市到2号城市  距离为1
// 2 4 1        2号城市到4号城市  距离为1
// 3 4 1        3号城市到4号城市  距离为1

const matrix = [
  [0, 1, 2, 1, Infinity],
  [1, 0, 1, Infinity, Infinity],
  [2, 1, 0, Infinity, 1],
  [1, Infinity, Infinity, 0, 1],
  [Infinity, Infinity, 1, 1, 0],
]
// const weight = [1, 2, 1, 5, 3]
const dp = [0, Infinity, Infinity, Infinity, Infinity]
// const dpw = [...weight]

const emergency = (matrix, start = 0) => {
  const row = matrix.length
  const col = matrix[0].length
  // console.log(dpw);
  for (let i = 0; i < row; ++i) {
    // 这个一遍循环得出来的是与i行直接相联的边的情况
    for (let j = 0; j < col; ++j) {
      if (matrix[i][j] + dp[i] < dp[j]) {
        dp[j] = matrix[i][j] + dp[i]
        // dpw[j] = dpw[i] + weight[j]
        // console.log(dpw, i, j);
      }
      // else if (matrix[i][j] + dp[i] === dp[j]) {
      //   if (dpw[i] + weight[j] > dpw[j]) {
      //     dpw[j] = dpw[i] + weight[j];
      //     console.log(dpw);
      //   }
      // }
    }
  }
  console.log(dp);
}

emergency(matrix, 0)
