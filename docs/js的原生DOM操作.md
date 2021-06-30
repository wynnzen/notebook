# js的原生DOM操作

DOM节点有个nodeType属性

* Element 元素
* Attribute 属性
* Text 文本

## DOM创建

createElement 创建元素
createTextNode 创建文本

`var item = document.createElement('div');`

`var text = document.createTextNode('hello');`

## DOM查询

* querySelector 
* querySelectorAll
* getElementById 根据classId获取
* getElementsByClassName 根据className获取
* getElementsByTagName 根据element的tag名称获取

querySelector的参数是一个或者多个dom选择器的字符串，返回的是第一个满足条件的Element对象

`document.querySelector('.class')`

querySelectorAll 返回所有满足条件的
`document.querySelectorAll('.class')`


```
// 获取父元素、父节点
var parent = ele.parentElement;
var parent = ele.parentNode;

```

`parentElement`和`parentNode`的区别在于如果是最高级别的节点，parentNode会返回#document 而 parentElement返回null

> In most cases, it is the same as parentNode . The only difference comes when a node's parentNode is not an element. If so, parentElement is null . Since the <html> element ( document.documentElement ) doesn't have a parent that is an element, parentElement is null .


```
// 获取子节点，子节点可以是任何一种节点，可以通过nodeType来判断
var nodes = ele.children;    
```


```
// 当前元素的第一个/最后一个子元素节点
var el = ele.firstElementChild;
var el = ele.lastElementChild;

// 下一个/上一个兄弟元素节点
var el = ele.nextElementSibling;
var el = ele.previousElementSibling;
```

## DOM更改


```
// 添加、删除子元素
ele.appendChild(el);
ele.removeChild(el);

// 替换子元素
ele.replaceChild(el1, el2);

// 插入子元素
parentElement.insertBefore(newElement, referenceElement);
```
## 属性操作


```
// 获取一个{name, value}的数组
var attrs = el.attributes;

// 获取、设置属性
var c = el.getAttribute('class');
el.setAttribute('class', 'highlight');

// 判断、移除属性
el.hasAttribute('class');
el.removeAttribute('class');

// 是否有属性设置
el.hasAttributes();     
```

DOM元素的innerHTML, outerHTML, innerText, outerText属性的区别

todo



