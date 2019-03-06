# css的盒子模型

html元素分为

display的方式

* 行内元素 line
* 块级元素 block

对于块级元素的水平居中可以

```
#item{margin:0 auto};
```

box model

在CSS中，你设置一个元素的 width 与 height 只会应用到这个元素的内容区。如果这个元素有任何的 border 或 padding ，绘制到屏幕上时的盒子宽度和高度会加上设置的边框和内边距值。

box-sizing:

* content-box  是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
* border-box 告诉浏览器去理解你设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px,那么这100px会包含其它的border和padding，内容区的实际宽度会是width减去border + padding的计算值。大多数情况下这使得我们更容易的去设定一个元素的宽高。


![](https://i.loli.net/2019/02/11/5c604f92ab854.jpg)


![](https://i.loli.net/2019/02/11/5c604f93f3b93.jpg)


> 在标准盒模型中，width 和 height 指的是内容区域的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。

------


> 在标准盒模型中：盒子占位width = width + 2margin + 2padding + 2*border,高度与之一样。
盒子真正德width = width + 2padding + 2border。 margin不算！margin可以改变盒子占位的大小，但是盒子的宽高并没有改变，而是位置的改变！

IE的盒子模型
![](https://i.loli.net/2019/02/11/5c604f945da3b.jpg)

ie 盒子模型的 content 部分包含了 border 和 pading


参考链接

> https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing
> 
> 

