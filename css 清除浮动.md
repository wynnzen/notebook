# css 清除浮动


```html
<div class="outer">
    <div class="div1">1</div>
    <div class="div2">2</div>
    <div class="div3">3</div>
</div>
```

```css
.outer{border: 1px solid #ccc;background: #fc9;color: #fff; margin: 50px auto;padding: 50px;}
.div1{width: 80px;height: 80px;background: red;float: left;}
.div2{width: 80px;height: 80px;background: blue;float: left;}
.div3{width: 80px;height: 80px;background: sienna;float: left;}
```

![58913f08648fe](https://i.loli.net/2018/01/30/5a703314b7276.jpg)



## 方法1

```html
<div class="outer">
    <div class="div1">1</div>
    <div class="div2">2</div>
    <div class="div3">3</div>
    <div class="clear"></div>
</div>
```

```css
.clear{clear:both; height: 0; line-height: 0; font-size: 0}
```

## 方法2

```html
<div class="outer over-flow"> //这里添加了一个class
    <div class="div1">1</div>
    <div class="div2">2</div>
    <div class="div3">3</div>
    <!--<div class="clear"></div>-->
</div>
```

```css
.over-flow{
    overflow: auto; zoom: 1; //zoom: 1; 是在处理兼容性问题
}
```


## 方法3


```css
.outer {zoom:1;}    /*==for IE6/7 Maxthon2==*/
.outer:after {clear:both;content:'';display:block;width: 0;height: 0;visibility:hidden;}   /*==for FF/chrome/opera/IE8==*/
```


