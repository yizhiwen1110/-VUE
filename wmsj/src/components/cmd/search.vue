<template>
    <div>
            <div class="searc"> 
    <!-- 返回cmd -->
  <router-link id="a" to='./cmd'><img id='cc'  src="../../assets/返回.png" alt=""> </router-link>
  <!-- 搜索组件 -->
  <mt-search v-model="value"></mt-search>
  <!-- 按钮 -->
  <button id='btnn'  @click="search">搜索</button>
        </div>
         <!-- 控制哭脸的显示隐藏 -->
          <div  v-if="ifs">   
        <!-- 搜索结果布局 -->
        <div class="Searchresultslayout" >
         <!--搜索结果样式  -->
          <div v-for="(n,i) of dota" :key='i' class="searchresult">
            <router-link :to="'/spxq?sid='+n.sid">
              <img :src="'http://127.0.0.1:3000/'+n.sid+'-1.jpg'" alt="">
              <span>{{n.Name}}</span>
              <p class="yx">{{n.details}}</p>
              <p>￥{{n.Price}}</p>
            </router-link>
          </div>
        </div>
      </div>
   
        <div v-else>
            <img class="top30" src="../../assets/ku.png" alt="">
            <p>您搜索的商品不存在</p>
            <span style="color:red">换个词搜搜吧！</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
       value:'',
       dota:[],
       ifs:true,
        }
    },
    methods:{
        search(){    
            // 通过ajax查找文本框内容
        var url='search';
         this.axios.get(url,{params:{name:this.value}}).then(result=>{ 
          if(result.data=='non'){
           this.ifs=false
          }else{    
               var data=result.data
               this.dota=data
               console.log(this.dota)
                   this.ifs=true
                }
         }).catch(err=>{ 
             console.log(err)
         })
     
        }
    }
}
</script>
<style>
#btnn{
      width:60px; 
    height:44px;
    background-color: #d9d9d9;
    border: 0;
    border-radius: 1px;
    color: #26a2ff;
    font-size: 16px;
}
 #a{ 
    width:35px; 
    height:43px;
    background-color: #d9d9d9;
} 
.searc{
display: flex;
}
#cc{
   margin-top:9px; 
    width: 35px;
    height:25px
}
    .mint-searchbar-core{
    font-size: 16px;
    height: 34px;
    text-align: center;
    border: 0;
    border-radius: 6px;
    margin-top:10px; 
    background-color: rgba(0, 0, 0, .0) !important;
}
.mint-search {
    height: 100%;
    height: 100vh;
    overflow: hidden;
    flex: 1
}
.mint-search {
    height: 100%;
    height: 7vh !important;
    overflow: hidden;
}
.Searchresultslayout{
    position: relative;
    z-index: 99999999999999;
    width: 100%;
    display: flex;
    /* background-color: #fff; */
    flex-wrap:wrap;
}
.searchresult{
width: 48%;
height:330px;
margin: 0 5px 5px 0;
background-color: #fff; 
}
.searchresult img{
    width: 100%;
    height:60%;
}
.searchresult p+p{
    color: red;
    font-size: 15px;
}
.searchresult span+p{
    font-size: 12px;
}
.top30{
    margin-top:50px 
}
.yx{
    height:20px;
    overflow: hidden;
   white-space: nowrap; 
   text-overflow: ellipsis;
}
</style>