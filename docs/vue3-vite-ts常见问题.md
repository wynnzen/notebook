# vue3-vite-ts常见问题
 
## 问题一 ReferenceError: React is not defined

参考 
* https://github.com/vitejs/vite/issues/1286
* https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx

```shell
yarn add @vitejs/plugin-vue-jsx --dev
```

```javascript
// vite.config.js
import vueJsx from '@vitejs/plugin-vue-jsx'

export default {
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    })
  ]
```