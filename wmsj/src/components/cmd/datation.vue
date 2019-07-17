<template>
    <div class="tion">
        <to></to>
  <!-- 所有分类 -->
<div class="page">
<!-- 一个类 -->
<div class="aclass" v-for="(n,i) of lists" :key="i">
 <router-link :to="'/fle?id='+n.img">
      <img :src="'http://127.0.0.1:3000/'+n.img+'.jpg' " alt="">
      <p>{{n.name}}</p> 
    </router-link>
</div>

</div>
    </div>
</template>
<script>
import to from './datationto'
export default {
    data(){
        return{
  lists:[{name:'特别限量',img:'z'},{name:'游戏手办',img:'x'},{name:'主题服饰',img:'c'},{name:'创意T恤',img:'v'},{name:'毛绒玩具',img:'b'},{name:'生活用品',img:'n'}]
        }
    },
    components:{
        'to':to,
    }
}
</script>
<style>
.tion{
    background-color: #fff;
}
    .page{
        display: flex;
       flex-wrap: wrap;
    justify-content: space-between;
    }
    .aclass{
        margin-top:20px;
        margin-bottom:20px;  
        width: 50%;
    }
    .aclass img{
        width: 50%;

    }
</style>