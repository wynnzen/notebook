```javascript
const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});
 
const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});
 
const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});
 
const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});
 

 
queuePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
});


function queuePromise(ajaxArray) {
    //todo 补全函数
}
```


1. 通过定义一个`Promise.resolve()`的p，使用for循环，通过then方法，将每个promise方法连接起来

```javascript
function queuePromise(ajaxArray) {
    
    let p = Promise.resolve();
  let arr = [];
  ajaxArray.forEach(promise => {
    p = p.then(promise).then((data) => {
        arr.push(data);
        return arr;
    });
  });
  return p;

}
```

2. 通过async函数

```javascript
function queuePromise(ajaxArray) {
  let arr = [];
  async function run() {
      for(let p of ajaxArray) {
          let val = await p();
          arr.push(val);
      }
      return arr;
  }
  return run();
}
```
