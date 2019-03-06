# call，apply和bind的区别

* 都是修改function内在的this的指向
* 如果第一个参数传入的是null的话，那么浏览器中默认是`window`，node中默认是`global`，但是函数体内部如果是**严格模式**，那么this仍然是`null`。
* 还可以借用其他对象的方法，实现类似继承的效果。
* 可以针对**类数组对象**（可以通过索引访问元素，并且拥有 length 属性；没有数组的其他方法，例如 push ， forEach ， indexOf 等。）完成数组的操作，比如` Array.prototype.push`，` Array.prototype.slice`等等


```
var A = function( name ){ 
    this.name = name;
};
var B = function(){ 
    A.apply(this,arguments);
};
B.prototype.getName = function(){ 
    return this.name;
};
var b=new B('sven');
console.log( b.getName() ); // 输出:  'sven'
```


## call

`fn.call(this,arg1,arg2...)`

call的第一个变量是要指向的this的新object

接受的参数列表

## apply

`fn.apply(this,[arg1,arg2...])`

apply的第一个变量是要指向的this的新object

接受的是参数数组（或者类数组对象）


## bind

bind其实可以通过call和apply进行实现


```
Function.prototype.bind = function( context ){ 
    var self = this; // 保存原函数
    return function(){ // 返回一个新的函数
        return self.apply( context, arguments );//执行新的函数的时候，会把之前传入的context当作新的函数体的this
    } 
};
```


```
Function.prototype.bind = function(){ 
    var self = this, // 保存原函数
        context = [].shift.call( arguments ),//需要绑定的this上下文
        args = [].slice.call( arguments ); //剩余的参数转成数组
    return function(){ // 返回一个新的函数
        return self.apply( context, [].concat.call( args, [].slice.call( arguments ) ) ); 
        //执行新的函数的时候，会把之前传入的context当作新的函数体的this
        //并且组合两次分别传入的参数，作为新的函数的参数
    } 
};
```

`fn.bind(this,arg1,arg2...)`

bind的第一个变量是要指向的this的新object

函数需要的参数是从第二个开始按照数量传入的

区别是返回一个this已经绑定到新的object的函数

参考链接
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call







