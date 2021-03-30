// 背包问题：有一个背包，背包容量是M=150。有7个物品，物品可以分割成任意大小。
// 要求尽可能让装入背包中的物品总价值最大，但不能超过总容量。

// 物品 A B C D E F G

// 重量 35 30 60 50 40 10 25

// 价值 10 40 30 50 35 40 30


https://leetcode-cn.com/problems/assign-cookies/solution/fen-fa-bing-gan-by-leetcode-solution-50se/

var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  const numOfChildren = g.length, numOfCookies = s.length;
  let count = 0;
  for (let i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
      while (j < numOfCookies && g[i] > s[j]) {
          j++;
      }
      if (j < numOfCookies) {
          count++;
      }
  }
  return count;
};
