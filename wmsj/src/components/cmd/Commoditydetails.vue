<template>
    <div>
        <!-- 商品详情头部 -->
       <div class="dls">
          <router-link to='./cmd'><img src="../../assets/返回.png" alt=""> </router-link>
          <div class="Fouranchors"> 
              <div> 
              <router-link to=''>商品</router-link>
              <router-link to=''>详情</router-link>
              <router-link to=''>评论</router-link>
              <router-link to=''>发现</router-link>
              </div>
           </div>
          <router-link to='/cmd'><img src="../../assets/商品详情首页.png" alt=""></router-link>
        </div> 
       <div style="height:50px"></div>
        
          <!-- 大轮播图 -->
      <div class="xqlb">
<mt-swipe  :auto="3000">
    <!-- 动态循环加载轮播图图片 -->
  <mt-swipe-item v-for="(item,index) of Pictures1" :key='index'><img :src="'http://127.0.0.1:3000/'+item"  alt=""></mt-swipe-item>
  <!-- <mt-swipe-item><img src="http://img.wanmei.com/secretshop/sta/show/20180906/d48cfe1da9774157be0cb5bbfe5b0f3c.jpg" alt=""></mt-swipe-item>
   <mt-swipe-item><img src="http://img.wanmei.com/secretshop/sta/show/20180906/24d4ec75f1f84f7d93c3a7b14c2f6aa6.jpg" alt=""></mt-swipe-item>
    <mt-swipe-item><img src="http://img.wanmei.com/secretshop/sta/show/20180906/0515374abefb40f58d487a5f68f648f8.jpg" alt=""></mt-swipe-item> -->
</mt-swipe>
        </div>
      <!-- 商品详情 -->
      <div class="dist">
          <h2>{{Name}}</h2>
          <p>{{Commoditydetails}}</p>
          <p class="man">￥{{commodityprice}}</p>
      </div>
      <!-- 运输地址 -->
       <div>
           <div class="TransportAddress">
               运输：
               <span>上海</span>
           </div>
       </div>
      <!-- 运费 -->
      <div class="freight"> 
      <p >运费：￥18</p>
      </div>
      <!-- 数量 -->
       <div id="Quantityofcommodities">
           数量：
         <button @click="plus">-</button><span>{{Quantityofcommodities}}</span><button @click="reduce">+</button> 
       </div>
       <h4>产品详情</h4>
       <!-- 产品详情 -->
       <div class="cp">
           <!-- 动态循环加载详情图片 -->
        <img v-for="(n,i) of Pictures2" :key='i' :src="'http://127.0.0.1:3000/'+n" alt="">
         <!-- <img src="http://img.wanmei.com/secretshop/sta/product/20180906/c6e7ebf3a4704cebbcabc1ddf9215918.jpg" alt="">
          <img src="http://img.wanmei.com/secretshop/sta/product/20180906/bbb7e4852daa44fa998c364a3d2e0032.jpg" alt="">  -->
          </div>
       <div style="height:60px"></div>
       <!-- 购买和加入购物车按钮 -->
       <div class="shoppingcart">
           <div class="small">
               <div @click="sc">
                   <img :src="'http://127.0.0.1:3000/'+`${a}.png`" alt="">
                 <p> 收藏 </p> 
               </div>
               <div @click="gwc"><img src="../../assets/详情购物车.png" alt="">
              <p>购物车</p> 
               </div>
               <div> <img src="../../assets/客服.png" alt=""><p>客服</p></div>
           </div>
             <a class="a1"  @click="tocart">加入购物车</a> 
           <a class="a2" >立即购买</a>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
         Name:'',
         Commoditydetails:'',
         commodityprice:'',
         Quantityofcommodities:1,
         Pictures1:[],
         Pictures2:[],
           a:'收藏',
           img:''

        }
    },
    mounted(){
        // 获取转跳传来的id
   var  sid=this.$route.query.sid
   console.log(sid)
//    sid++
//    console.log(sid)
// 获取页面数据
     var url='CommodityInformation'
      this.axios.get(url,{params:{sid:sid}}).then((result)=>{
        //   返回结果
       var data=result.data[0]
        this.Name=data.Name
         this.commodityprice=data.Price
         this.Commoditydetails=data.details
        var Pictures1=JSON.parse(data.Pictures1);
        var Pictures2=JSON.parse(data.Pictures2);
         this.Pictures1=Pictures1
         this.Pictures2=Pictures2
         this.img=this.Pictures1[0]
         console.log(this.img)
      }).catch((err)=>{
          console.log(err)
      })

    },
    methods:{
        // 加入购物车功能
        tocart(){
             var n=sessionStorage.getItem('name')
             if(n){   
            var url='/Shopping'
            this.axios.get(url,{params:{Pictures:this.img,Name:this.Name,Price:this.commodityprice,Number:this.Quantityofcommodities}}).then(result=>{
               this.$toast(result.data);
            }).catch(err=>{
                console.log(err)
            })
             }else{
                 this.$router.push({ path:'/Sign'})
             }
        },
        sc(){
            // 收藏
var n=sessionStorage.getItem('name')
if(n){          
    var a=this.a
  if(a=='收藏'){
      this.a='红收藏'
  }else{
      this.a='收藏'
  }  }else{
        this.$router.push({ path:'/Sign'})
  }
        },
       gwc(){
        //    点击转跳购物车
           var n=sessionStorage.getItem('name')
           if(n){
         this.$router.push({ path:'/cart'})
           }else{
       this.$router.push({ path:'/Sign'})
           }
       },
        plus(){
            // 计步器 + -
            if(this.Quantityofcommodities>1){
                var n=this.Quantityofcommodities
                n--
                this.Quantityofcommodities=n
          
            }
        },
       reduce(){
           var b=this.Quantityofcommodities
           b++
           this.Quantityofcommodities=b
        }
    },
   
}
</script>
<style>
*{margin: 0;padding: 0;}
body{
    background-color: #fff;
}
    .dls{
        background-color: #fff;
        position: fixed;
        top: 0px;
        left: 0;
        z-index: 33;
    height: 50px;
    width:100%;
    display: flex;
    border-bottom:1px solid #d7d7d7;

    }
 .dls div{
     width: 80%;
 }  
 .dls a{
     line-height: 68px; 
      width:10%; 
      color:#000
 }
 .dls img{
     width: 90%;
     height:65%
 }

.Fouranchors div{
    width:80%; 
  display: flex;
  margin: 0 auto;
}
.Fouranchors a{
    line-height: 50px;
     width: 25% 
}
.xqlb{
    width:100%;
    height:375px;
    background-color: #fff;
}
.xqlb img{
    width:100%;
    height:370px;
}
.dist{
    text-align: left;
    width: 100%;
    padding: 25px;
     overflow: hidden;
    position: relative;
    background-color: #fff;
  margin-top:10px ;
  border-bottom:1px solid #d4d4d4 
}
.man{
    color:red;
    font-size: 25px;
}
.TransportAddress{
    background-color: #fff;
    height:80px;
    text-align: left;
    font-size: 18px;
    color:#cacaca;
    line-height: 80px;
    border-bottom:1px solid #d4d4d4;
    padding:0 20px 
}
.freight{
     background-color: #fff;
    height:80px;
     text-align: left;
    line-height: 80px;
    border-bottom:1px solid #d4d4d4;
    padding:0 20px 
}
#Quantityofcommodities{
       background-color: #fff;
    height:80px;
     text-align: left;
    line-height: 80px;
    border-bottom:1px solid #d4d4d4;
    padding:0 20px 
}
#Quantityofcommodities button{
    margin: 20px 8px 0 8px;
        
}
.small{
    padding-top:13px; 
width: 50%;
display: flex
}
.small div{
    width:33%;
    height:100px;
}
.small img{
    width: 35%;

}
.shoppingcart{
    width: 100%;
    height:60px;
    display: flex;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    z-index: 20
}
.shoppingcart a{
    width: 30%;
    color:#fff;
}
.a1{
   background-color: #e27b3c;
   line-height: 60px;
}
.a2{
background-color: #cf0000;
 line-height: 60px;
}
.cp img{
    width: 100%;
    /* height:386px */
}
h4{
    background-color: #fff;
    height:50px;
line-height: 50px;
}
</style>