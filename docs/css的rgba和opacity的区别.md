css的rgba和opacity的区别

当您想创建一个覆盖图片的标题，图片能透过标题显示，且标题的文本显示不受影响，此时应该使用RGBA修改标题背景色的透明度；另一方面，当您想要创建一个动画效果，让整个UI元素从完全隐藏到可见，此时应该使用不透明度（Opacity）。

```
<p>This paragraph is using RGBA for transparency</p>
<p>This paragraph is using opacity for transparency</p>
```

```
/* Red with RGBA */
p:nth-child(1) {	
  background-color: rgba(255,0,0,0.5);
}

/* Red with opacity */
p:nth-child(2) {
  background-color: rgb(255,0,0);
  opacity: 0.5;
}
```

rgba修改的是背景色

opacity会将文本颜色和背景色都透明化

