<template>
        <div>
        <div class="fle">
            <div id="fles">  
          <router-link to="/cmd"><img  src="../../assets/返回.png" alt=""></router-link> 
             <input @focus='cheg' type="text">
               </div>
        </div>
        <!-- 页面布局 -->
    <div class="wrot">
         <!--单个商品  -->
       <div v-for="(n,i) of dalis" :key="i" class="flea">
           <router-link :to="'/spxq?sid='+n.sid">  
           <img :src="'http://127.0.0.1:3000/'+n.Pictures1" alt="">
           <br>
           <span>{{n.Name}}</span>
           <p>{{n.details}}</p>
           <p>￥{{n.Price}}</p>
            </router-link>
       </div>
      
   </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
         dalis:[]
        }
    },
    mounted(){
        // 获取分类页面传来的数据
 var  cid=this.$route.query.id
// 根据cid查找数据
 var url='branch'
 this.axios.get(url,{params:{id:cid}}).then((result) => {
    for(var n of result.data){
        n.Pictures1=JSON.parse(n.Pictures1)[0];
    }
   this.dalis=result.data
 }).catch((err) => {
     console.log(err)
 });
    },
  methods:{
        cheg(){
            // 点击返回
             this.$router.push({ path:'/search'})
        }
    }
}
</script>
<style>
.fle{
    background-color: #fff;
} 
#fles{
    display: flex;
    height:50px;
  padding-top:8px 
} 
 #fles img{
    width: 48px;
    height:34px;
} 
#fles input{
   width: 80%;
   height:35px;
   background-image: url(../../assets/分类搜索.png);
   background-repeat:no-repeat;
   background-size:10% 100%;
   padding-left:28px 
}
 .wrot{
     width: 100%; 
    display: flex;
    flex-wrap:wrap
}
.flea{
    background-color: #fff;
width: 50%;
}
.flea p{
 
    height:20px;
     overflow:hidden;
    text-overflow:ellipsis;
}
.flea img{
    width: 100%;
    height: 65%;
    padding: 8px
}
.flea p+p{
    color: red; 
    font-size: 19px;
}
</style>
