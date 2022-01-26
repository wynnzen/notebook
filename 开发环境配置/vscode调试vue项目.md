# vscode调试vue项目

需要预先装好vscode和chrome

1. 安装`debugger for chrome`插件

* [debugger for chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

2. 在`vue.config.js`中配置
```javascript
module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  }
}
```

3. 在vscode的debugger功能里面配置`launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "vuejs: chrome",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}/src",
      "breakOnLoad": true,
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    },
    {
      "type": "firefox",
      "request": "launch",
      "name": "vuejs: firefox",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}/src",
      "pathMappings": [{ "url": "webpack:///src/", "path": "${webRoot}/" }]
    }
  ]
}
```

4. 在编辑器需要debugger位置设置断点
5. 启动vue服务，比如`npm run serve`
6. 在vsocde的debugger功能点击`play`按钮
7. 在浏览器打开页面，执行到代码处就能有debugger信息在vscode中显示了

参考资料
* https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html