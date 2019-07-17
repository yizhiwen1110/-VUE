<template>
    <div class="to">
   <div class="search_bar">
<img class="bar_logp_dota2shop" src="http://static.dota2.com.cn/shop/mobile/images/logo_dota2.png" alt="">
<img class="bar_logp_dota2" src="http://static.dota2.com.cn/shop/mobile/images/logo_dota2shop.png" alt="">
       <input id="input" @focus='search' type="text">
      
         <a href="#"><img class="wode" src="../../assets/我的2.png" alt=""></a>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
        }
    },
    methods:{
        search(){
            // 点击获取焦点跳到搜索页面
       this.$router.push({ path:'/search'})
        },

    }
}
</script>
<style>
*{margin: 0 ;padding: 0}
    .search_bar{
        display: flex;
        position: fixed;
      left: 0;
      top: 0;
        width: 100%;
        height: 48px;
    text-align: left;
    background-color:red;
    padding-top:10px; 
    }
    .bar_logp_dota2shop{
       width: 7%;
   height: 22px;
      margin: 0 5px 0 5px
    }
    .bar_logp_dota2{
        width: 10%;
        height: 22px;
        margin: 0 35px 0 5px
    }

    #input{ 
        padding-left:25px; 
        background-image: url(../../assets/搜索.png);
        background-size:10% 90%;
        background-repeat:no-repeat;
     width: 60%;
    height: 32px;
    background-color: #fff;
    border: 0;
    margin-bottom:10px; 
    }
    .wode{
        margin-left: 10px;
    flex: 1;
height: 22px; 
    }
    .to{
    position: relative;
    height:48px ;
    z-index: 1;
    }
</style>