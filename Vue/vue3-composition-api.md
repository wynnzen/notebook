# vue3-composition-api

> 逻辑关注点的分离->composition-api
> 
> 视图关注点的分离->component/template


## setup

```javascript
setup(props,context){}
```

props是响应式的，如果传入的参数更新了, props也会更新
但因为响应式不能直接解构，会**破坏**响应式

context是个非响应式对象，可以解构

```javascript
const {attrs,slots,emit} = context
```

在setup执行时，只有props,attrs,slots,emit可用

无法访问data,computed,methods

> 从 setup 返回的 refs 在模板中访问时是被自动浅解包的，因此不应在模板中使用 .value

内部没有this

## h

setup 还可以返回一个渲染函数h，该函数可以直接使用在同一作用域中声明的响应式状态

## 响应式变量

* reactive 只能对象，不用value获取
* ref 任意类型，需要value获取
* toRef 获取props特定属性，不能解构，需要value获取
* toRefs 比toRef多一个解构赋值

相关知识
* [vue3的reactive,ref,toRef,toRefs区别](vue3的reactive,ref,toRef,toRefs区别.md)
  

## 生命周期钩子
setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们

改为on+原来的名称 是函数式的

|    选项式 API   | Hook inside setup |
|:---------------:|:-----------------:|
| beforeCreate    | Not needed*       |
| created         | Not needed*       |
| beforeMount     | onBeforeMount     |
| mounted         | onMounted         |
| beforeUpdate    | onBeforeUpdate    |
| updated         | onUpdated         |
| beforeUnmount   | onBeforeUnmount   |
| unmounted       | onUnmounted       |
| errorCaptured   | onErrorCaptured   |
| renderTracked   | onRenderTracked   |
| renderTriggered | onRenderTriggered |
| activated       | onActivated       |
| deactivated     | onDeactivated     |

## watch和computed

### watch

* 一个想要侦听的响应式引用或 getter 函数
* 一个回调
* 可选的配置选项

```javascript
watch('property',(new,old)=>{},options)
```

### computed

computed 函数传递了第一个参数，它是一个类似 getter 的回调函数，输出的是一个只读的响应式引用。为了访问新创建的计算变量的 value，我们需要像 ref 一样使用 .value property。

```javascript
const cpValues = computed(()=>{ return data}) // cpValues.value 
```

## provide&inject

provide 定义 key和value

inject 定义导入的key和默认值（可选）
```javascript
import { provide } from 'vue'
provide('key','value')
```

```javascript
import { inject } from 'vue'
inject('key','defalut value')
```

如果增加传递的值的响应性，只需要将值改为ref或者reative的格式就可以了

提供的值不被修改可以增加`readonly`函数

```javascript
const v = ref(value)
provide('key',readonly(v))
```

如果需要inject的子组件修改readonly的值可以通过project一个method给子组件

## ref 引用
1. 模板定义ref
```html
<template> 
  <div ref="root">This is a root element</div>
</template>
```

```javascript
<script>
  import { ref, onMounted } from 'vue'

  export default {
    setup() {
			// 初始化响应式的ref和template里面的ref连接起来
      const root = ref(null)

      onMounted(() => {
        // DOM 元素将在初始渲染后分配给 ref
        console.log(root.value) // <div>This is a root element</div>
      })

      return {
        root
      }
    }
  }
</script>
```

> watch() 和 watchEffect() 在 DOM 挂载或更新之前运行副作用，所以当侦听器运行时，模板引用还未被更新。

```javascript
watchEffect(() => {
	// 这个副作用在 DOM 更新之前运行，因此，模板引用还没有持有对元素的引用。
	console.log(root.value) // => null
})
```

可以通过给watch和watchEffect增加一个参数，让他们在dom渲染之后再运行effect
```javascript
watchEffect(() => {
	console.log(root.value) // => <div>This is a root element</div>
}, {
	flush: 'post'
})

```