# currentColor

```css
div { 
  color: red; 
  border: 5px solid currentColor;
  box-shadow: 0 0 5px solid currentColor;
}
```

currentColor会继承父元素的color

```css
body { color: red; }
div { border: 5px solid currentColor; }
```

这里如果有多个color的重复声明，那么currentColor会以最后一个color的为准
```css
div {

   color: red;
      
   border: 5px solid currentColor;
   box-shadow: 0 0 5px currentColor; 
    
   color: black;
   
 }
```



参考链接

> https://css-tricks.com/currentcolor/