// https://leetcode-cn.com/problems/unique-paths-ii/

function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dpMatrix = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; ++i) {
      if (obstacleGrid[i][0] === 1) break
      dpMatrix[i][0] = 1
  }
  for (let i = 0; i < n; ++i) {
      if (obstacleGrid[0][i] === 1) break
      dpMatrix[0][i] = 1
  }
  for (let i = 1; i < m; ++i) {
      for (let j = 1; j < n; ++j) {
          if (obstacleGrid[i][j] === 1) continue; // 没有就当作0处理
          dpMatrix[i][j] = dpMatrix[i - 1][j] + dpMatrix[i][j - 1]
      }
  }
  return dpMatrix[m - 1][n - 1]
};