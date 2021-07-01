'use strict';

const fs = require('fs')
const { resolve, extname, basename } = require('path')
const glob = require('glob')

const strTrim = (str) => {
	var result = str.replace(/\s+/g, "");
	return result
}

glob.sync(resolve(__dirname, './docs', '**/*.md')) // 遍历该目录底下的所有文件
	.forEach((file) => {
		let extension = extname(file); //  获取后缀名
		let fileName = basename(file, extension); // 获取没有后缀的文件名
		let newFileName = strTrim(fileName)
		if ((/\s+/g).test(fileName)) {
			let filePath = resolve(__dirname, './docs', fileName + extension)
			let newfilePath = resolve(__dirname, './docs', newFileName + extension)
			fs.rename(filePath, newfilePath, (error) => {
				if (error) {
					console.log('重命名失败:')
					console.log(error);
				} else {
					console.log(`重命名成功: ${fileName} -> ${newFileName}`);
				}
			});
		}
	})