# JSONP和CORS

因为请求非同一个服务器的文件会出现安全问题，根据跨站策略是禁止的，但是有JSONP和CORS的方式来完成跨站请求



* 简单请求
* 复杂请求

简单请求需要同时满足三大方法和HTTP头信息的两大条件

三大方法

* head
* get
* post

HTTP的头信息

* Accept
* Accept-Language
* Content-Language
* Last-Event-ID
* Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

简单请求里面浏览器会自动加上`Origin`字段（协议 + 域名 + 端口）
如果不在origin的源不在请求的许可范围内就会抛出错误
但是如果在范围内就会在**响应请求**中增加几个字段


```
Access-Control-Allow-Origin: http://xxxxxx.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: XXXXXX
Content-Type: text/html; charset=utf-8
```

PS: 
XMLHttpRequest的`getResponseHeader`只能拿到6个基本字段，如果要额外字段需要在`Access-Control-Expose-Headers`中声明

* Cache-Control
* Content-Language
* Content-Type
* Expires
* Last-Modified
* Pragma


> 如果要发送Cookie，**Access-Control-Allow-Origin就不能设为星号，必须指定明确的、与请求网页一致的域名**。同时，Cookie依然遵循同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传，且（跨源）原网页代码中的document.cookie也无法读取服务器域名下的Cookie。


非简单请求

浏览器遇到非简单请求就会自动发送一个OPTIONS请求
* Access-Control-Request-Method
* Access-Control-Request-Headers

浏览器的接受的回应

* Access-Control-Allow-Methods: GET, POST, PUT
* Access-Control-Allow-Headers: X-Custom-Header
* Access-Control-Allow-Credentials: true
* Access-Control-Max-Age: 1728000




-------
因为在脚本中请求一个非同源的地址就不受限制，所以可以通过在script里面请求额外的地址script地址让服务器返回类json数据

jsonp就是利用了<script>标签

jsonp实现跨域请求的原理： 前端在页面里添加一个回调方法


参考链接
> http://www.ruanyifeng.com/blog/2016/04/cors.html


