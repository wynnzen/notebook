1. 强制一行溢出显示省略号（...）
```
overflow:hidden;//超出的隐藏
text-overflow:ellipsis;//显示省略符号来代表被修剪的文本。
white-space:nowrap;//不换行
 ```
 
 
2. 但是如果要强制两行甚至多行
 
    网上大多版本都是：
```
overflow: hidden;  // 超出的文本隐藏
text-overflow: ellipsis; // 溢出用省略号显示
display: -webkit-box; // 将对象作为弹性伸缩盒子模型显示。
-webkit-line-clamp: 2; // 这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
-webkit-box-orient: vertical;  // 从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
 ```
但是在实际项目中，我们会发现并没有效果，这是因为 代码经过编译后就把 -webkit-box-orient: vertical 干掉了。所以最终的最好的解决方案：
 ```   
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2; //多行在这里修改数字即可
overflow:hidden;
/* autoprefixer: ignore next */
-webkit-box-orient: vertical;
```