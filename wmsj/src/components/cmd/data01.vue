<template>
<div>
    <div class="a">
<mt-swipe class="lbt" :auto="3000">
  <mt-swipe-item><img class="img" src="http://img.wanmei.com/secretshop/sta/tj/20190320/057c4f358ec44a0f8b895cefde950179.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img  class="img" src="http://img.wanmei.com/secretshop/sta/tj/20190320/3062f64e5239409e942d55823993b820.jpg" alt=""></mt-swipe-item>
</mt-swipe>
    </div>
  <img style="width:100%" src="../../assets/xpss.png" alt="">
  <div class="jtlbt">
<mt-swipe :auto="0">
  <mt-swipe-item><img src="http://img.wanmei.com/secretshop/sta/tj/20190320/4de1abd52a29453da099578758ea2b3e.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="http://img.wanmei.com/secretshop/sta/tj/20180801/ba713a9f560b426286ee97e16816e920.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="http://img.wanmei.com/secretshop/sta/tj/20190320/4de1abd52a29453da099578758ea2b3e.jpg" alt=""></mt-swipe-item>
</mt-swipe>
  </div>
 
  <div class="goods">

      <div class="details" v-for="(n,i) of list" :key="i" > 
          <!-- 点击跳转并且将sid传入到商品详情页 -->
       <router-link :to="'/spxq?sid='+n.sid">
  <img style="width:100%;height:200px;" :src="'http://127.0.0.1:3000/'+n.picture" alt="">
     <!-- <img style="width:100%;height:200px;"  src="../../assets/1.png" alt="">  -->
   <h4>{{n.details}}</h4>
   <div class="Price">
    <span >￥{{n.Price}}</span>
    </div>
</router-link>   
   </div>


  </div>
      <p>完美世界(北京)软件科技发展有限公司</p>
  <div style="height:56px;">

  </div>
    </div>
</template>
<script>

export default {
    data(){
       return{
           list:[],
       }
    },

    mounted(){
        // 获取所有页面数据
         var url='homedata';
          this.axios.get(url).then((result) => {
              var data=result.data
              this.list=data
             
          }).catch((err) => {
              console.log(err)
          });
        },
   
}
</script>
<style>
.inputs{
    display:none;
}
.a{
    height:270px;
    width: 100%;
 
}
.img{
    width:100%;
    height:270px;
}
.goods{
    display: flex;
     flex-wrap: wrap;
    justify-content: space-between;
    padding: 4px;
   
}
.details{
    width: 50%;
 background-color: #ffffff;
    border: 1px solid #ddd;
   border-radius: 5px; 
}
.details h4{
  width: 90%;
 overflow: hidden;
font-size: 15px;
color:#333;
}
.Price{
    margin: 5px 0 15px 0;
color:red;
font-size: 15px
}
.jtlbt{
    width: 100%;
    height: 250px;
}
.jtlbt img{
    width: 50%;
  height: 100%; 
}
</style>