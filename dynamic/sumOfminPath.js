// 64. 最小路径和
// https://leetcode-cn.com/problems/minimum-path-sum/

function minPathSum(grid) {
  const row = grid.length
  const col = grid[0].length
  const dpMatrix = new Array(row).fill(0).map(() => new Array(col).fill(0))
  dpMatrix[0][0] = grid[0][0]
  for (let i = 1; i < row; ++i) {
      dpMatrix[i][0] = dpMatrix[i - 1][0] + grid[i][0]
  }
  for (let i = 1; i < col; ++i) {
      dpMatrix[0][i] = dpMatrix[0][i - 1] + grid[0][i]
  }
  for (let i = 1; i < row; ++i) {
      for (let j = 1; j < col; ++j) {
          dpMatrix[i][j] = Math.min(dpMatrix[i - 1][j], dpMatrix[i][j - 1]) + grid[i][j]
      }
  }
  return dpMatrix[row - 1][col -1]
};