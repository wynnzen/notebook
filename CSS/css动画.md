# css动画

## transition

transition是个简写属性

* transition-delay
* transition-duration
* transition-property
* transition-timing-function

在transition属性中，各个值的书写顺序是很重要的：第一个可以解析为时间的值会被赋值给transition-duration，第二个可以解析为时间的值会被赋值给transition-delay。

img{
    transition: 1s 1s height ease 
}

* ease - 默认的减速启动，中间加速，减速停止
* linear - 匀速
* ease-in - 减速启动
* ease-out - 减速停止
* ease-in-out -  ease-in和ease-out结合
* cubic-bezier(n,n,n,n) - 自定义

http://cubic-bezier.com/#.17,.67,.83,.67


-------


## animation


```
div:hover{
    animation: 1s rainbow infinite;
}
```

1s 代表一次动画的持续时间
rainbow 代表动画名称（是在keyframes里面定义的）
infinite 代表次数 infinite无限次播放


```
@keyframes rainbow {
  0% { background: #c00; }
  50% { background: orange; }
  100% { background: yellowgreen; }
}

//keyframes 代表了关键帧
```


###  animation-fill-mode

动画结束以后，会立即从结束状态跳回到起始状态。如果想让动画保持在结束状态，需要使用animation-fill-mode属性。

* forwards 动画停留在结束状态
* none 默认值，回到动画没开始时的状态。
* backwards 让动画回到第一帧的状态。
* both 根据animation-direction（见后）轮流应用forwards和backwards规则


### animation-direction

* normal
* alternate
* reverse
* alternate-reverse

![](media/15497175950546/15498813355138.jpg)



```
div:hover {
  animation: 1s 1s rainbow linear 3 forwards normal;
}

```


```
div:hover {
  animation-name: rainbow;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-delay: 1s;
  animation-fill-mode:forwards;
  animation-direction: normal;
  animation-iteration-count: 3;
}
```

0%可以用from代表，100%可以用to代表

```
@keyframes rainbow {
  from { background: #c00 }
  50% { background: orange }
  to { background: yellowgreen }
}

```


另外一点需要注意的是，浏览器从一个状态向另一个状态过渡，是平滑过渡。steps函数可以实现分步过渡。

div:hover {
  animation: 1s rainbow infinite steps(10);
}

如果想让动画保持突然终止时的状态，就要使用animation-play-state属性。


```

div {
    animation: spin 1s linear infinite;
    animation-play-state: paused;
}

div:hover {
  animation-play-state: running;
}

```

参考链接

> http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html
> 





