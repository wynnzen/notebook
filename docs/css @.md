# css @

@charset 指定编码  
@import 导入css文件 在所有文件之前，除了charset以外
@media 媒体查询
@font-face 指定使用的文字
@supports 测试实验性功能
@document 实验性 按照url来判断应用的样式    

```
@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
       url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
```

