<template>
  <div>
    <h2>深入v-model</h2>
    <input type="text" v-model="msg">
    <span>我爱你{{msg}}</span>
    <br>
    <input type="text" :value="msg" @input="msg = $event.target.value">
    <span>我爱你{{msg}}</span>
    <br>

    <!-- :value="msg" props传递 
    @input=""就变为自定义事件-->
    <!-- <CustomInput :value="msg" @input="msg = $event"></CustomInput>   -->
    <CustomInput v-model="msg"></CustomInput>  
    <!-- 
      v-model本质是：:value和@input的组合
      1、父组件给子组件传递value数据，子组件内部接收value数据并使用
      2、父组件内部给子组件绑定自定义事件@input
      3、子组件内部触发自定义事件@input，并传递子组件内部修改的value值
      4、父组件就可以接收到子组件传递过来的新值，并修改父组件内部的数据
      5、父组件一旦修改称为新的数据，新数据又被传递到子组件的value
      经历完这5步，实现了父子数据同步的效果
    -->

    <!-- 我们以后写el-input比较多，但是我们可以把el-input当做是原生的html input
    但是原理是完全不一样的，它的原理就是上面所说的 -->
    <!-- <el-input v-model="msg" placeholder=""></el-input> -->
    <el-input :value="msg" @input="yyy($event)" placeholder=""></el-input>



  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data(){
      return {
        msg:'赵丽颖'
      }
    },
    components: {
      CustomInput
    },
    methods:{
      // xxx(event){
      //   this.msg = event.target.value
      // }

      yyy(aa){
        this.msg=aa
      }
    }
  }
</script>
