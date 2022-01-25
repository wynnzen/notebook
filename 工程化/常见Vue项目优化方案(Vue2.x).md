# 常见Vue项目优化方案(Vue2.x)

## 开源库使用公共CDN

* 国内
  * https://www.bootcdn.cn/
* 国外
  * https://www.jsdelivr.com/
  * https://unpkg.com/
  * https://cdnjs.com/

在`vue.config.js`中配置

```javascript
const isProd = process.env.NODE_ENV === "production"; // 判断是什么环境

// 配置cdn的对应关系
const assetsCDN = {
  // webpack build externals
  externals: {
    vue: "Vue",
    "vue-router": "VueRouter",
    vuex: "Vuex",
    axios: "axios",
    vant: "vant",
  },
  css: ["//cdn.bootcdn.net/ajax/libs/vant/2.12.39/index.min.css"],
  // https://unpkg.com/browse/vue@2.6.10/
  js: [
    // "//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js",
    // "//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js",
    // "//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js",
    // "//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js",
    // "//cdn.jsdelivr.net/npm/vant@2.12.39/lib/index.min.js",
    "//cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js",
    "//cdn.bootcdn.net/ajax/libs/vue-router/3.1.3/vue-router.min.js",
    "//cdn.bootcdn.net/ajax/libs/vuex/3.1.1/vuex.min.js",
    "//cdn.bootcdn.net/ajax/libs/axios/0.19.0/axios.min.js",
    "//cdn.bootcdn.net/ajax/libs/vant/2.12.39/vant.min.js",
  ],
};


module.exports = {
	chainWebpack: (config) => {
    // 将assetsCDN在index.html中循环
    if (isProd) {
      config.plugin("html").tap((args) => {
        args[0].cdn = assetsCDN;
        return args;
      });
    }
  },
}
```

在`public/index.html`中 配置

```html
<% for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.js) { %>
  <script type="text/javascript" src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
<% } %>
```

## 开启Gzip压缩

[判断浏览器请求的文件是否已经开启了gzip](https://github.com/wynnzen/notebook/blob/master/%E5%B7%A5%E5%85%B7/%E5%A6%82%E4%BD%95%E5%9C%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E4%B8%AD%E5%BC%80%E5%90%AFgzip.md)

安装`compression-webpack-plugin`

注意版本

```
npm i -D compression-webpack-plugin^1.1.12,
```

在`vue.config.js`中配置

```javascript
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
	configureWebpack: {
    plugins: [
      new CompressionPlugin({
        algorithm: "gzip", // 使用gzip压缩
        test: /\.js$|\.html$|\.css$/, // 匹配文件名
        filename: "[path].gz[query]", // 压缩后的文件名(保持原文件名，后缀加.gz)
        minRatio: 1, // 压缩率小于1才会压缩
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
      }),
    ],
  },
}
```

`npm run build` 就会生成 `.gz` 文件

nginx 需要增加gzip的支持的配置

```
http {
    gzip  on;
    gzip_min_length  1k;
    gzip_buffers     4 16k;
    gzip_http_version 1.1;
    gzip_comp_level 9;
    gzip_types       text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php application/javascript application/json;
    gzip_disable "MSIE [1-6]\.";
    gzip_vary on;
}
```

常见的配置说明

```
gzip on;                     #开启gzip压缩功能
gzip_min_length 10k;         #设置允许压缩的页面最小字节数; 这里表示如果文件小于10个字节，就不用压缩，因为没有意义，本来就很小.
gzip_buffers 4 16k;          #设置压缩缓冲区大小，此处设置为4个16K内存作为压缩结果流缓存
gzip_http_version 1.1;       #压缩版本
gzip_comp_level 2;           #设置压缩比率，最小为1，处理速度快，传输速度慢；9为最大压缩比，处理速度慢，传输速度快; 这里表示压缩级别，可以是0到9中的任一个，级别越高，压缩就越小，节省了带宽资源，但同时也消耗CPU资源，所以一般折中为6
gzip types text/css text/xml application/javascript;      #制定压缩的类型,线上配置时尽可能配置多的压缩类型!
gzip_disable "MSIE [1-6]\.";       #配置禁用gzip条件，支持正则。此处表示ie6及以下不启用gzip（因为ie低版本不支持）
gzip vary on;    #选择支持vary header；改选项可以让前端的缓存服务器缓存经过gzip压缩的页面; 这个可以不写，表示在传送数据时，给客户端说明我使用了gzip压缩
```

## router懒加载

[vue-router懒加载](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)

```javascript
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
```

生成不同的chunk file

## TreeShaking


## 静态资源CDN

> 图片，音视频等资源放置在cdn服务

## HTTP2

