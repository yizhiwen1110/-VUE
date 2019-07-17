<template>
 <div class="ca">
        <!-- 头部 -->
     <div class="cart"  >
       <router-link to='./cmd'> <a href=""><img src="../../assets/返回.png" alt=""></a> </router-link>
        <!-- v-on:click="back" -->
        <div>我的购物车</div>
        <span class="btn"><button @click="sc">整理</button></span>
     </div>
  <!-- 商品信息 -->
    <div class='mation'>
       <div class="box">
         <input v-model="election" @click='qx' type="checkbox">
       </div>
         <span class="Commoditydetails">商品信息</span>
         <span class="operation">操作</span>
    </div>
     
     <div v-if="dli">   
    <!-- 购物车商品 -->
    <div class="merchandise" v-for="(item,index) of data" :key="index">
        <!-- 多选框 -->
       <div  class="box">    <!-- @click='umber' -->
            <input v-model="check" @click='boxs' type="checkbox" :value=item>
        </div>
        <!-- 商品信息 -->
        <div class="detail"> 
           <img style="width:40px;height:40px;" :src="'http://127.0.0.1:3000/'+item.Pictures" alt="">
            <p class="words">
               <a>{{item.Name}}</a>
               <span>￥{{item.Price}}</span>
             </p>
        </div>
        <!-- 商品数量 -->
        <div class="Number">
 <button @click="item.Number>1?item.Number--:''">-</button><span>{{item.Number}}</span><button @click="item.Number<99?item.Number++:''">+</button>
        </div>
    </div>
    </div>
<!-- 购物车无数据时显示效果 -->
<div v-else>  
   <img style="margin-top:50px" src="../../assets/ku.png" alt=""> 
   <p>购物车尚未添加商品</p>
</div>
  <!-- 底部提交 -->
    <div class="Submission">
        <div class="Total" v-if='tude'>
            <span class="money">￥{{getTotal.totas}}.00</span>
            <br>
            商品：<span class="Number">{{getTotal.Num}}</span>
        </div>
        <div v-else class="ber">  
           已选中{{getTotal.Num}}件商品
        </div>
        <a class="Order" @click='deletes'>{{Submission}}</a>
    </div>
 </div>
</template>
<script>
export default {
    data(){
        return{
    data:[],
    Submission:'提交订单',
    dli:false,
    check:[],
    idex:0,
    tude:true,
    election:false,
    suy:0
        }
    },
    // 生命周期计算属性
    computed:{
 getTotal:function(){
    //  总价
     var tota=0
    //  数量
     var sum=0
for(var i=0;i<this.check.length;i++){
   tota+=Number(this.check[i].Price)*Number(this.check[i].Number)
     sum+=Number(this.check[i].Number)
}
// 返回商品价格总计和商品数量
return {Num:sum,totas:tota}
 }
     },
 mounted(){
    //  加载购物车数据
     var url='Shoppingcartdata'
     this.axios.get(url).then((result) => {
       if(result.data=='non'){
            this.dli=false
       }else{ 
           this.dli=true
            this.data=result.data
        // for(var i of this.data){
        //  i.Number=JSON.parse(i.Number);
        // }
       }
     }).catch((err) => {
         console.log(err)
     });
 },
 methods:{
    //  全选按钮
     qx(){
        //  定时器
  setTimeout(() => {
      if(this.election==false){
          this.idex=0
        //   如果全选按钮没有选中，选中的数组清空
           this.check=[]
      }else{
        //   如果按钮选中，将ajax加载的数据id插入到选中数组
         for(var n of this.data){
             this.check.push(n)
         }
          this.idex=this.check.length
      }
         }, 100); 
     },
    //  全选按钮2
     boxs(){
           setTimeout(() => {
           if((this.check.length==this.data.length)&&this.check.length>0){
               this.election=true
           }else{
             this.election=false
           }
      
              },100)
          },
    //   umber(){
    //       商品数量
    //      加定时器是因为在单击input元素时，调用函数的速度比v-model快，函数执行完了v-model才将获取到的value传到数组，导致单击时的结果是上一个的结果
    //     setTimeout(() => {
    //       if(this.check.length>=0){
    //       this.idex=this.check.length
    //        console.log(this.check)
    //   }  
    //     }, 100);
    //  },
     sc(){
        //  改变按钮位置从而实现功能
         if(this.Submission=='提交订单'){
             this.Submission='删除'
             this.tude=false
         }else{
             this.Submission='提交订单'
             this.tude=true
         }
     },
     deletes(){
        //  删除购物车数据
        // 按钮名称必须为删除
         if(this.Submission=='删除'){
            //  必须选中
         if( this.check.length>0){
             var sid=[]
             for(var n of this.check){
                 sid.push(n.sid)
             }
             var url='deletes'
             this.axios.get(url,{params:{sid:sid}}).then(result=>{
                     this.$toast(result.data);
                        //  流畅刷新当前路由
                         this.$router.replace({
                            path: '/refresh' })
                     if(result.data=='删除成功'){
                         this.Submission='提交订单'
                     }
             }).catch(err=>{
                 console.log(err)
             })
            }else{ this.$toast('请选中要删除的商品')}
        }
     }
 }
    
}
</script>
<style>
input{
   width:17px;
    height:17px;
   
}

/* 我的购物车头部样式 */
  .cart{
        display: flex;
        height: 50px;
        border-bottom:1px solid #d7d7d7; 
    }
     .cart a{
       width: 20%;
    padding: 10px;
     }
     .cart img{
         width: 60%;
         height: 90%;
     }
      .cart div{
      width: 230px;
      line-height: 50px;
      color: #323232;
      }
      .btn{
          flex: 1;
          padding-top:9px ;
      }
      /* 按钮样式 */
    .ca  button{
          background-color: #e32332;
          color:#fff  ;
        border-radius:8px ;
      }
      .mation{
          display: flex;
          height: 45px;
          border-bottom:2px solid #e4e4e4;
      }
      .box{
          width: 20%;
          line-height:47px ;
      }
      .Commoditydetails{
          width: 50%;
            line-height:45px ;
            color: #323232;
      }
    .operation{
        flex: 1;
       line-height:45px;
       color:#999;
       font-size: 14px;
    }
    /* 底部提交按钮 */
    .Submission{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        height:50px ;
    }
    .Order{
    flex: 1;
    line-height: 50px;
    color: #fff;
    background-color: #e32332
    }
    .Total{
        width: 65%;
        text-align: left;
        padding-left:20px;
        background-color: #fff;
        color: #e32332;
        font-weight:700;
    }
    /* 商品信息样式 */
    .merchandise{
     display: flex;
     padding-top: 10px;
border-bottom:1px solid #e4e4e4; 
    }
   .detail{
       display: flex;
        width:55%; 
       height: 52px;
   }
   .detail p{
       line-height: 20px;
   }
   .words{
       padding-left:8px; 
       display: flex;
        flex-direction:column;
       color:#999;
       font-size: 5px;
       text-align: left;
     line-height: 15px;
   }
    .words a{
        color:#000;
         width: 100%;
    overflow: hidden; 
    }
   .Number{
   flex: 1;
   line-height:34px;
   }
   .ber{
    flex: 1;
   line-height:55px;
    background-color: #fff;
    color:#666;
    border: 0
   }
   .Number button{
       background-color: #ddd;
       color:#666;
       border: 0
   }
 .Number span{
     margin: 0 6px 0 6px;
 }
</style>