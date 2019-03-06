# jquery 插件开发方法

* 通过`$.extend()`来扩展jQuery
* 通过$.fn 向jQuery添加新的方法
* 通过$.widget()应用jQuery UI的部件工厂方式创建


$.extend合并方法到jquery对象上

> 通过$.extend()来扩展jQuery这种开发模式只能为jQuery类添加简单的静态方法，无法操作DOM元素

```
$.extend({
    printTime: function(){
        var now = new Date(),
            y = now.getFullYear(),
            m = now.getMonth()+1,
            d = now.getDate();
        console.log(y +'-'+ m +'-'+ d);
    }
});
/*调用*/
$.printTime();
```

`$.fn.extend` 合并方法到jquery的原型上


```
jQuery.fn = jQuery.prototype = {
    init:function(selector,context){...};
};
```

在插件代码里是处理每个具体的元素而不是对一个集合进行处理，由上面已经知道this指代jQuery选择器返回的集合，那么通过调用jQuery的.each()方法就可以处理集合中的每个元素了，需要注意的是，此时在each方法内部，this指代普通的DOM元素，需要用$(this)来调用jQuery方法

jQuery有一个优雅的特性就是支持链式调用，而为了是编写的插件也支持链式调用，只需return this.each(...);把jQuery对象返回出来，就可以继续调用其他插件来处理这个jQuery对象。


```
  $.fn.myPlugin = function(){
            var n=1;
            retrun this.each(function(){
                $(this).append(n);
                n++;
            });
        }
        $('p').myPlugin();
```





