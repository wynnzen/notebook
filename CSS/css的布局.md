# css的布局


## 块级元素水平居中


```
div{
    margin:0 auto;
}
```

## box-sizing

默认的其实是content-box
这个width是content的width，实际的width是content的width+padding+border

可以将box-sizing设置为border-box
这里width就是content-width + padding + border

## position

static

static 是默认值。任意 position: static; 的元素不会被特殊的定位。一个 static 元素表示它不会被“positioned”，一个 position 属性被设置为其他值的元素表示它会被“positioned”。

relative

在一个相对定位（position属性的值为relative）的元素上设置 top 、 right 、 bottom 和 left 属性会使其偏离其正常位置。其他的元素的位置则不会受该元素的影响发生位置改变来弥补它偏离后剩下的空隙。

fixed
一个固定定位（position属性的值为fixed）元素会相对于视窗来定位，这意味着即便页面滚动，它还是会停留在相同的位置。和 relative 一样， top 、 right 、 bottom 和 left 属性都可用。

absolute

 absolute 与 fixed 的表现类似，但是它不是相对于视窗而是相对于最近的“positioned”祖先元素。如果绝对定位（position属性的值为absolute）的元素没有“positioned”祖先元素，那么它是相对于文档的 body 元素，并且它会随着页面滚动而移动。记住一个“positioned”元素是指 position 值不是 static 的元素。


float实现文字环绕效果

clear可以清除浮动


```
.clearfix {
  overflow: auto;
  zoom: 1;
}
```

* vertical-align 属性会影响到 inline-block 元素，你可能会把它的值设置为 top 。
* 你需要设置每一列的宽度
* 如果HTML源代码中元素之间有空格，那么列与列之间会产生空隙


多列


```
.three-column {
  padding: 1em;
  -moz-column-count: 3;
  -moz-column-gap: 1em;
  -webkit-column-count: 3;
  -webkit-column-gap: 1em;
  column-count: 3;
  column-gap: 1em;
}
```

参考链接

> http://zh-tw.learnlayout.com/box-model.html

