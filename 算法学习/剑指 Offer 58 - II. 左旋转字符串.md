# 剑指 Offer 58 - II. 左旋转字符串
## 题目
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

 

示例 1：

输入: s = "abcdefg", k = 2
输出: "cdefgab"
示例 2：

输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
 

限制：

1 <= k < s.length <= 10000

## 分析
1. 通过slice切片字符串再组装
2. 逐步添加


## 解答
1. 字符串切片
```javascript
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let k = s.slice(0,n)
    let m = s.slice(n)
    return m + k
};
```

2. 逐步添加
```javascript
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let k = ""
    for(let i = n; i< s.length;i++){
        k += s[i]
    }
    for(let i = 0;i <n ;i++){
        k+=s[i]
    }

    return k
};
```