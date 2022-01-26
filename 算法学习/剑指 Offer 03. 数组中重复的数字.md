# 剑指 Offer 03. 数组中重复的数字
## 题目


找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
 

限制：

2 <= n <= 100000


# 分析
1. 先排序，然后遍历，如果n+1元素和n元素相等就找到了
2. 利用hash来存储
3. 原地交换，因为数字的大小都在长度n的里面，所以可以利用数组的索引当作hash的key来用，如果遍历的值不相等就交换，如果相等就说明找到了

# 解答
2. hash法
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let m = new Map([])
    for(let i in nums){
        if(m.get(nums[i])){
            return nums[i]
        }
        else{
            m.set(nums[i],1)
        }
    }
   

};
```