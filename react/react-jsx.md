1. JSX 只是为 `React.createElement(component, props, ...children)` 方法提供的语法糖
2. react组件的首字母**大写**
3. 由于 JSX 编译成`React.createElement`方法的调用，所以在你的 JSX 代码中，`React`库必须也始终在作用域中，所以一定要在代码中引用了 import React from 'react'; 如果是在script中加载了react，那就相当于react以全局变量的形式被加载了
4. 定义了组件类，可以通过object.key的方式引用组件
5. **基于属性值渲染不同的组件**可以**赋值给大写开头的变量**
6. jsx属性props
   1. 表达式
   2. 字符串
   3. 没有给属性传值就S默认是true
   4. ...作为展开属性
7. 子代props.children
   1. 字符串
   2. jsx组件（嵌套）
   3. 表达式
   4. 函数
   5. false,null,undefined,true不会被渲染，会被忽略，只能String()转换成字符串才行，但是数字0依旧会被渲染。