<template>
    <div class="a">
   <!-- <h1>我的第一个vue脚手架页面{{n}}</h1> -->
<mt-tab-container class="page-tabbar-container" v-model="selected">
<mt-tab-container-item id='首页'>
 <to></to>
<datas></datas>
</mt-tab-container-item>
<mt-tab-container-item  id='分类' >
<!-- <mt-cell v-for='n in 10' title='我的分类' :key="n"></mt-cell> -->
<tion></tion>
</mt-tab-container-item>
 <!-- <mt-tab-container-item id='购物车'>
<cart></cart> 
</mt-tab-container-item> -->
<mt-tab-container-item id='我的'>
<my ref='my'></my>
</mt-tab-container-item>
</mt-tab-container>

<!-- 底部选项卡 -->
<mt-tabbar v-model="selected" fixed> 
<!-- 1 -->
<mt-tab-item id='首页' @click.native='changeState(0)'>
    <tabbaricon
    :selectedImage='require("../assets/红首页.png")'
    :normalImage='require("../assets/首页.png")'
    :focused='currentIndex[0].isSelect'
    ></tabbaricon> 
<!-- <img slot="icon" src="../assets/首页.png" alt=""> -->
首页
</mt-tab-item>
<!-- 2 -->
<mt-tab-item id='分类'  @click.native='changeState(1)' >
        <tabbaricon
    :selectedImage='require("../assets/红分类.png")'
    :normalImage='require("../assets/分类.png")'
    :focused='currentIndex[1].isSelect'
    ></tabbaricon> 
<!-- <img slot="icon" src="../assets/分类.png" alt=""> -->
分类
</mt-tab-item>
<!-- 3 -->

<mt-tab-item id='购物车' >
  <router-link to='./cart'>
<img class="gwc" src="../assets/购物车.png" alt=""> 
<br>
购物车
</router-link>
</mt-tab-item>



<mt-tab-item id='我的'  @click.native='changeState(2)'>
     <div @click="wd" > 
            <tabbaricon
    :selectedImage='require("../assets/红我的.png")'
    :normalImage='require("../assets/我的.png")'
    :focused='currentIndex[2].isSelect'
    ></tabbaricon>   

<!-- <img class="gwc" src="../assets/我的.png" alt="">  -->
<!-- <br> -->
我的  
</div>
</mt-tab-item>
</mt-tabbar>

    </div>
</template>
<script>
import data01 from './cmd/data01'
import to from './cmd/to'
import tion from './cmd/datation'
// import cart from './cmd/cart'
import my from './cmd/PersonalCenter'
import TabBaricon from './cmd/TabBaricon'
export default {
    data(){
        return{
           selected:'首页',
           currentIndex:[
               {isSelect:true},
               {isSelect:false},
                {isSelect:false}
             
           ]
        }
    },
      components:{ my },
    methods:{
         changeState(n){
      for(var i=0;i<this.currentIndex.length;i++){
          if(n==i){
              this.currentIndex[i].isSelect=true;
          }else{
              this.currentIndex[i].isSelect=false;
          }
      }
     },
        // 调用子组件中的childFn方法
       parent(){
      this.$refs.my.childFn()
       },
        wd(){
             var n=sessionStorage.getItem('name')
            if(n){
           //判断成功后调用 
         this.parent()
            }else{
           this.$router.push({ path:'/Sign'})
            }
        }
    },

    components:{
        'datas':data01,
         'to':to,
         'tion':tion,
        //  'cart':cart
        "my":my,
        "tabbaricon":TabBaricon
    },

}
</script>
<style>
     .a{ 

         color:red
    }

.gwc{
    width: 27px;
    height:27px
}
</style>