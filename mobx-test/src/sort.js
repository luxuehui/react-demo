// 冒泡排序 [8,100,2,12,43,2,5]
// 每次内层循环一次，最后一位最大值被筛选出来
export const sort = (arr) => {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        // let temp = arr[j]
        // arr[j] = arr[j+1]
        // arr[j+1] = temp
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
      }
    }
  }
  return arr
}
// 选择排序
// 每次内层循环一次，第一位最小值筛选出来
export const sort2 = (arr) => {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      if (arr[i] > arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return arr
}
