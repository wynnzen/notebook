# promise的知识点

js针对异步操作是采用回调函数的方式解决的

Promise对象代表异步状态

* pending 进行中
* fulfilled 成功
* rejected 失败

promise对象的状态改变只可能两种状态变化

* pending -> fulfilled
* pending -> rejected

针对一个resolved（包含fulfilled和rejected）的状态的Promise，不管任何时候调用回调函数都是相同的结果，但如果是Event的话，错过后是监听不到的

Promise的缺点

* 无法中途取消Promise，一旦创建就会立即执行
* 如果不设置回调函数来捕获异常，内部抛出的错误不会反映到外部
* pending 状态无法区分即将开始还是即将完成


```
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

Promise构造函数接受一个函数作为参数，这个函数存在两个参数resolve和reject，这两个函数分别指定resolved和rejected的状态



```
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

生成的promise实例可以使用then来指定resolved和rejected状态的回调函数




参考链接

> http://es6.ruanyifeng.com/#docs/promise


