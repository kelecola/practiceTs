// https://leetcode-cn.com/problems/unique-paths/

// 为什么要写动态规划，当然是因为太吃内存了（用例跑不过了）
// function uniquePaths(m: number, n: number): number {
//     let ways = 0
//     const dfs = (row, col) => {
//         if (row === m - 1 && col === n - 1) ++ways
//         row < m && dfs(row + 1, col)
//         col < n && dfs(row, col + 1)
//     }
//     dfs(0, 0)
//     return ways
// };

function uniquePaths(m, n) {
  // F(m, n) = F(m - 1, n) + F(m, n - 1)
  // F(0, 0) = 0
  // F(1, 1) = F(0, 1) + F(1, 0) = 2
  // 生成一份二维数组
  const dpMatrix = new Array(m).fill(0).map(() => new Array(n).fill(0))
  dpMatrix[0] = new Array(n).fill(1)
  for (let i = 0; i < m; ++i) {
      dpMatrix[i][0] = 1
  }
  for (let i = 1; i < m; ++i) {
      for (let j = 1; j < n; ++j) {
          dpMatrix[i][j] = dpMatrix[i - 1][j] + dpMatrix[i][j - 1]
      }
  }
  return dpMatrix[m - 1][n - 1]
};