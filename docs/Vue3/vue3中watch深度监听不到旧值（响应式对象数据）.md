```js
import { ref, watch, computed } from 'vue';
let obj = ref({
  name: '悟空',
  age: 18
});
setTimeout(() => {
  obj.value.age = 20;
}, 1000);
watch(
  () => obj.value,
  (newValue, oldValue) => {
    // 为什么？
    // 只会创建一个响应式对象,通过proxy来代理的
    console.log('newValue', newValue); // {name: '悟空',age: 20}
    console.log('oldValue', oldValue); // {name: '悟空',age: 20}
    console.log(newValue === oldValue); // true
  },
  {
    deep: true
  }
);
// 解决一（比较麻烦）
// 只监听对象里面的某一个值
watch(
  () => obj.age.value,
  (newValue, oldValue) => {
    console.log('newValue', newValue); // 20
    console.log('oldValue', oldValue); // 18
    console.log(newValue === oldValue); // false
  },
  {
    deep: true
  }
);
// 解决二(对象序列化)
let objStr = computed(() => JSON.stringify(obj.value));
watch(
  () => objStr.value,
  (newValue, oldValue) => {
    console.log('newValue', newValue); // {name: '悟空',age: 20}
    console.log('oldValue', oldValue); // {name: '悟空',age: 18}
    console.log(newValue === oldValue); // false
  },
  {
    deep: true
  }
);
```
