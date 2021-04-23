// 相邻密码判断
// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript
function getPINs(observed) {
  const map = {
    0: ['0', '8'],
    1: ['1', '2', '4'],
    2: ['1', '2', '3', '5'],
    3: ['2', '3', '6'],
    4: ['1', '4', '5', '7'],
    5: ['2', '4', '5', '6', '8'],
    6: ['3', '5', '6', '9'],
    7: ['4', '7', '8'],
    8: ['5', '7', '8', '9', '0'],
    9: ['6', '8', '9']
  }
  if (observed.length === 0) return []
  if (observed.length === 1) return map[observed[0]]
  
  const resArr = []
  const dfs = (str, resStr) => {
    if (str === '') {
      resArr.push(resStr)
      return
    }
    for (let i = 0; i < map[str[0]].length; ++i) {
      dfs(str.slice(1), resStr + map[str[0]][i])
    }
  }
  dfs(observed, '')
  
  return resArr
}