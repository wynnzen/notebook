# flex布局

flex作为弹性布局，很好的解决了垂直居中不容易的问题

![bg2015071004](media/15497175907709/bg2015071004.png)

存在水平主轴(main axis)和垂直交叉轴(cross axis)

flex设定在容器和容器内的元素上

设定在容器上的值

* flex-direction
* flex-wrap
* flex-flow
* justify-content
* align-items
* align-content

## 容器的属性

### flex-direction 
主轴的方向

* row 水平，起点左端
* row-reverse 水平，起点右端
* column 垂直，起点上端
* column-reverse 垂直，起点下端


![bg2015071005](media/15497175907709/bg2015071005.png)

### flex-wrap

轴线上的项目的换行方式

* nowrap 不换行
* wrap 自动换行
* wrap-reverse 自动换行（反向）

### flex-flow

`flex-flow`是`flex-direction` 和 `flex-wrap`的简写

`flex-flow <flex-direction> | <flex-wrap>`

### justify-content

主轴上的项目对齐方式

![bg2015071010](media/15497175907709/bg2015071010.png)

假设主轴的顺序是从左到右

* flex-start 左对齐
* flex-end 右对齐
* center 居中
* space-between 两端对齐，项目之间的间隔相等
* space-around 每个项目之间的间隔相等，**项目距离左右两侧边界的距离是项目与项目之间距离的一半**

### align-items

项目在交叉轴上面的对齐方式

![bg2015071011](media/15497175907709/bg2015071011.png)



假设交叉轴的顺序是从上到下

* flex-start 交叉轴的起点对齐（上部对齐）
* flex-end 交叉轴的终点对齐（下部对齐）
* center 交叉轴中点对齐
* stretch 如果项目未设置高度或者auto的话，将占满整个容器高度
* baseline 项目**第一行**文字的基线对齐

### align-content

多根轴线的对齐方式(换行 flex-wrap:wrap)

![bg2015071012](media/15497175907709/bg2015071012.png)

* flex-start：与交叉轴的起点对齐。
* flex-end：与交叉轴的终点对齐。
* center：与交叉轴的中点对齐。
* space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
* space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
* stretch（默认值）：轴线占满整个交叉轴。


## 项目的属性

* order 项目的排列顺序，数值越小，排列越靠前，默认为0。
* flex-grow 项目的放大比例
* flex-shrink 项目的缩小比例
* flex-basis 分配多余空间之前，项目占据的主轴空间
* flex 是flex-grow, flex-shrink 和 flex-basis的简写
* align-self 允许单个项目有与其他项目不一样的对齐方式

### flex-grow

定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

![bg2015071014](media/15497175907709/bg2015071014.png)


### flex-shrink

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

### flex-basis

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

 `flex-basis: <length> | auto;`


### flex

flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

`flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`


### align-self

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

`align-self: auto | flex-start | flex-end | center | baseline | stretch;`


参考链接

> https://css-tricks.com/snippets/css/a-guide-to-flexbox/
> 
> http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

