'use strict';

const fs = require('fs')
const {resolve,extname,basename} = require('path')
const glob = require('glob')

let fileList = glob.sync(resolve(__dirname, './docs', '**/*.md')) // 遍历该目录底下的所有文件
.map((file)=>{
  var extension = extname(file); //  获取后缀名
  var fileName = basename(file,extension); // 获取没有后缀的文件名
  if(fileName === '_sidebar') return
  return `* [${fileName}](${fileName})`
})

let content = fileList.join('\n')

// 写入 siderbar 文件

try {
  fs.writeFileSync('./docs/_sidebar.md', content)
  //文件写入成功。
  console.log('目录生成成功!')
} catch (err) {
  console.log('目录生成失败:')
  console.error(err)
}

