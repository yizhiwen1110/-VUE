<template>
    <div>
     <!-- 头部 -->
        <div class="grzx">
            个人中心
         </div>
<!-- 个人信息 -->
        <div class="Personalinformation">
            <img class="Headportrait" src="../../assets/tx.png" alt="">
            <span class="UserName">{{uname}}</span>
            <button @click="zx" class="Cancellation">注销</button>
        </div>
<!-- 八个小功能 -->
<div class="functions">
    <div><img src="../../assets/付款.png" alt="">待付款 </div>
    <div><img src="../../assets/收货.png" alt="">待收货 </div>
    <div><img src="../../assets/售后.png" alt="">售后中 </div>
    <div><img src="../../assets/待评价.png" alt="">待评价 </div>
    <div><img src="../../assets/优惠劵.png" alt="">优惠券 </div>
    <div><img src="../../assets/收藏.png" alt="">收藏 </div>
    <div><img src="../../assets/预约.png" alt="">预约 </div>
    <div><img src="../../assets/评论.png" alt="">评论</div>
</div>
<!-- 四大功能 -->
        <div class="option">
            <!-- 我的订单 -->
            <router-link to=""><div>
                <span><img src="http://static.dota2.com.cn/shop/mobile/images/icon_book.png" alt="">我的订单</span>
             </div></router-link>
             <!-- 收货信息 -->
             <router-link to=""> <div> 
               <span><img src="http://static.dota2.com.cn/shop/mobile/images/icon_address.png" alt="">收货信息</span>
              </div> </router-link>
            <!-- 我的售后 -->
            <router-link to=""><div>
               <span><img src="http://static.dota2.com.cn/shop/mobile/images/nav_cs.png" alt="">我的售后</span> 
            </div></router-link>
            <!-- FAQ -->
            <router-link to=""><div>
               <span><img src="http://static.dota2.com.cn/shop/mobile/images/icon_faq.png" alt="">FAQ</span>
            </div></router-link>
        </div>
    </div>
</template>
<script>
export default {
 
    data(){
        return{
   uname:'请登录'
        }
    },
    // components:{ my },
    methods:{
        zx(){
            sessionStorage.clear()
            this.uname='请登录'
            // 流畅刷新当前页面
             this.$router.replace({
                path: '/chlist' })
                 this.$toast('您已退出')
        },
        // 方法由父组件调用
          childFn(){
       var n=sessionStorage.getItem('name')
           this.uname=n
         }    
        
    },
}

  



</script>
<style>
 .grzx{
     height:38px;
     color: #666;
     padding-top:8px; 
 }
    .Personalinformation{
        position: relative;
        width: 100%;
        height:140px;
       background: -webkit-gradient(linear, 50% 0, 50% 100%, from(#fc7e7e), to(#ef4747));
    }
    .Headportrait{
        position: absolute;
        top:35px;
        left: 32px;
        width: 64px;
        height: 64px;

    }
   .Cancellation{ 
     position: absolute;
     width: 50px;
    height: 30px; 
    right: 27px;
    top: 55px;
     color: #fff; 
    text-align: center;
     background:rgba(0,0,0,0); /*背景颜色完全透明*/
    border-radius: 8px;
    }
    .UserName{
     position: absolute;
     left: 118px;
    top: 58px;
    font-size: 20px;
    color: #fff;
    }
    .functions{
display: flex;
width: 100%;
height: 200px;
flex-wrap:wrap;
background-color: #fff;
    }
    .functions div{
        width: 25%;
        height:50%;
        border-right: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
        padding-top: 20px;
        font-size: 14px;
        color: #000
    }
    .functions img{ 
    display: block;
    height: 30px;
    margin: 0 auto 10px;
    }
    .option{
        margin-top:4px ;
        border-top:2px solid  #e4e4e4;
    }
      .option div{ 
     /* position: relative; */
    min-height: 68px;
    padding: 0 32px;
    /* font: normal 30px/108px "微软雅黑"; */
    color: #cacaca;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
      }
      .option span{
        clear:both;   /* 在给每个div浮动之前清除上一个浮动的影响 */
        float: left; 
        line-height: 70px;
        font-size: 18px;
      }
       .option img{
            width: 25%;
            height:25%;
            vertical-align:middle; 
            margin-right:5px; 
       }
</style>