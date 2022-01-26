# 剑指 Offer 05. 替换空格
## 题目
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

 

示例 1：

输入：s = "We are happy."
输出："We%20are%20happy."
 

限制：

0 <= s 的长度 <= 10000

## 分析
这里默认可以使用replaceAll来解决，
也可以一次遍历，遇到空格就替换

## 解答
1. replaceAll

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return s.replaceAll(' ','%20')
};
```

2. 逐步替换

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let n = ''
    for(let i in s){
        if(s[i] === ' '){
            n += '%20'
        }
        else{
            n += s[i]
        }
    }
    return n
};
```

换一种写法
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let re='';
    for(let i = 0;i<s.length;i++){
        if(s[i] === ' '){
            re = re + '%20';
            continue;
        }
        re = re + s[i];
    }
    return re;
};

```
