<template>
  <div>
    <h1>EventTest组件</h1>
    <!-- 原生dom事件 -->
    <!-- $event代表事件回调的默认参数，而且$event只能在模板里面写 -->
    <!-- 原生dom事件在html标签身上就只能是原生dom事件 -->
    <button @click="test($event)">test</button>
    <!-- 原生dom事件在组件标签身上，就变成自定义事件，但现在我就想要是原生事件 -->
    <!-- 如果一个原生dom事件添加在组件标签身上，而我们强制使用.native描述符把它变为
    原生事件，那么默认这个事件添加在组件内根元素身上 -->
    <Event1 @click.native="test2($event)">test2</Event1>

    <!-- 自定义事件 -->
    <!-- 自定义事件添加在html标签身上无意义，不会报错 -->
    <button @xxx="test3($event)">test3</button>
    <Event2 @xxx="test4($event)" @click="test4($event)"></Event2>
    <!-- <el-button></el-button> -->
     <!-- <el-button @click="visible = true">Button</el-button> -->
    <MyButton>按钮</MyButton>

  </div>
</template>

<script type="text/ecmascript-6">
import Event1 from "./Event1.vue";
import Event2 from "./Event2.vue";
import MyButton from './MyButton'

export default {
  name: "EventTest",

  components: {
    Event1,
    Event2,
    MyButton
  },

  methods: {
    test(event) {
      console.log(event.target.innerHTML);
    },
    test2(event) {
      console.log(event.target.innerHTML);
    },
    test3(event) {
      console.log(event.target.innerHTML);
    },
    test4(event) {
      console.log(event);
    },
  },
};
</script>
