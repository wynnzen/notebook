# Object.create和new Object发生了什么

## new Object
new Object 或者通过 对象字面量`{}`创建对象

当代码 new Foo(...) 执行时，会发生以下事情：

1. 一个继承自 Foo.prototype 的新对象被创建。
2. 使用指定的参数调用构造函数 Foo ，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。
3. 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）


当执行
 
```
var o = new Foo();
```

实际

```
var o = new Object(); // 新建Object对象
o.__proto__ = Foo.prototype; // prototype 原型链继承
Foo.call(o); // 通过call 修改内部this的指向，如果有参数就会附带上参数
```



## Object.create


Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 
**就是说 现有的对象是新创建的对象的原型**

**newObject.__proto__ === oldObject.prototype
通过这种方式实现继承**

Object.create(proto, [propertiesObject])

> proto
> 新创建对象的原型对象。
> propertiesObject
> 可选。如果没有指定为 undefined，则是要添加到新创建对象的可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。这些属性对应Object.defineProperties()的第二个参数。


```
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor. 子类继承父类的构造函数
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype); // 子类继承父类的属性和方法
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```


继承多个对象

```
function MyClass() {
     SuperClass.call(this);
     OtherSuperClass.call(this);
}

// 继承一个类
MyClass.prototype = Object.create(SuperClass.prototype);
// 混合其它
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// 重新指定constructor
MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function() {
     // do a thing
};
```

参考链接

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create

