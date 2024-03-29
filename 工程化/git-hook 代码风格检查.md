使用husky6插件编写git钩子来规范代码提交

使用husky6插件来规范git提交
1.安装husky6（用shell脚本或代码生成多种git钩子）
```
yarn add husky -D
```
2.启用 git hooks
```
yarn husky install
```
3.安装lint-staged（用于实现只对提交的内容进行操作）
```
yarn add lint-staged -D
```
4.在package.json中写
```
"lint-staged": {
    "*.{js,vue}": [
      "eslint --fix",
      "git add"
    ]
  }
```
5.添加pre-commit钩子（实现在提交之前首先运行lint-staged脚本）
```
yarn husky add .husky/pre-commit 'npx lint-staged'
```
至此已经实现git提交前首先进行eslint，前提是已经安装了eslint。
eslint+prettier的使用可以看我这篇

6.团队开发
正常提交.husky文件，内部忽略_文件。在package.json里添加脚本启用 git hooks，目的在于在npm run install 之后激活从远程拉取来的git钩子。
```
"postinstall":"npx husky install"
```
