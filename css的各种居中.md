# css的各种居中

## 水平居中

### inline或者*-line元素

inline, inline-block, inline-table, inline-flex 等等


```
.center-children {
  text-align: center;
}
```

### block元素


```
.center-me {
  margin: 0 auto;
}
```

### 多个block元素

将block改为inline-block 并且使用flex布局

## 垂直居中

### 单行+inline/*-inline

* 设置上下margin或者padding相等的
* 设置line-height与父元素的height相同

### 多行+inline/*-inline

父元素的display改为table
子元素的display改为table-cell
子元素的vertical-align:middle


或者使用ghost元素

```
.ghost-center {
  position: relative;
}
.ghost-center::before {
  content: " ";
  display: inline-block;
  height: 100%;
  width: 1%;
  vertical-align: middle;
}
.ghost-center p {
  display: inline-block;
  vertical-align: middle;
}
```

### 块级元素+不知道高度

#### 不知道父元素高度

```
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  height: 100px;
  margin-top: -50px; /* account for padding and border if not using box-sizing: border-box; */
}
```

如果box-sizing不是border-box的话，就需要在margin偏移的时候加上上下padding和上下border之和的一半

margin-top偏移值=(height+padding-top+padding-bottom+border-top+border-bottom)/2

#### 不知道子元素高度


```
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

可以使用transform 进行反向偏移

这个translateY的百分比是针对子元素本身的高度的




或者全部使用flex布局或者grid布局


```
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```
body, html {
  height: 100%;
  display: grid;
}
span { /* thing to center */
  margin: auto;
}
```






参考链接

https://css-tricks.com/centering-css-complete-guide/

