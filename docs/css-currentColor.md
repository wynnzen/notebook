# currentColor



```
div { 
  color: red; 
  border: 5px solid currentColor;
  box-shadow: 0 0 5px solid currentColor;
}
```

currentColor会继承父元素的color

```
body { color: red; }
div { border: 5px solid currentColor; }
```

```
div {

   color: red;
      
   border: 5px solid currentColor;
   box-shadow: 0 0 5px currentColor; 
    
   color: black;
   
 }
```

这里如果有多个color的重复声明，那么currentColor会以最后一个color的为准

参考链接

> https://css-tricks.com/currentcolor/
>
> 