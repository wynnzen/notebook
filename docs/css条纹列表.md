如何用css写一个条纹列表

先写个html的样式

```
<ul>
  <li><a href="#">United Kingdom</a></li>
  <li><a href="#">Germany</a></li>
  <li><a href="#">Finland</a></li>
  <li><a href="#">Russia</a></li>
  <li><a href="#">Spain</a></li>
  <li><a href="#">Poland</a></li>
</ul>
```

```
ul{
  padding:0px; // 移除li前面的占位空白
  border:1px solid #ececec;
  display:inline-block;
}
ul li{
  padding:8px;
  list-style-type:none; // 移除li前面的黑点
}
ul li:nth-child(even){
  // 利用css选择器，偶数列增加背景色
  background:pink;
}
ul li:hover{
  background:violet;
}
a{
  text-decoration:none; // 移除a标签的下划线
  color:black;
}
```

![](/Users/olivehuang/onedrive/markdown/picture/Screen Shot 2019-02-14 at 15.58.49.png)



如果想改为水平的，可以将`li`设置为`inline-block`

但是会有空白间距 如果要去掉这个，可以让`ul`的`font-size`设置为0，再将`li`的`font-size`复原

```
ul{
  padding:0px; // 移除li前面的占位空白
  border:1px solid #ececec;
  display:inline-block;
  font-size:0px; // 设置字体为0，清除空白
}
ul li{
  font-size:14px // 复原字体大小
  padding:8px;
  list-style-type:none; // 移除li前面的黑点
  display:inline-block;
}
```

![image-20190214160523316](/Users/olivehuang/onedrive/markdown/picture/image-20190214160523316.png)



参考链接

> https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements
>
> https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/