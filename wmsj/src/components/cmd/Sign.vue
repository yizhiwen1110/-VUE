<template>
    <div class="my">
        <!-- 头部 -->
    <div class="cart">
       <router-link to='./cmd?data=data01'> <a><img src="../../assets/返回.png" alt=""></a> </router-link>
        <!-- v-on:click="back" -->
        <div>完美世界账号登录</div>
     </div>
<!-- 登录注册 -->
        <div id="inputbox">
            <input v-model="Username" class="user" type="text">
            <input v-model="Userpassword" class="upwd" type="password">
             <button @click='Signin'>登录</button>
        </div>
        <div class="Account">
             <p class="p-left"><router-link to='./register'>注册新账号</router-link> </p>
            <p class="p-right" @click="wjmm"><router-link to=''>忘记密码</router-link> </p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
Username:'',
Userpassword:''
        }
    },
    methods:{
        wjmm(){
         this.$toast('请重新注册');
        },
        // 点击登录发送ajax
        Signin(){
            // 判断是否为空
            if(this.Userpassword=='' || this.Username==''){
                  this.$toast('用户名或密码不能为空');
            }else{ 
            // 接口名称
          var url='userlogin'
          this.axios.get(url,{params:{Username:this.Username,Userpassword:this.Userpassword}}).then((result)=>{
            //   弹窗显示返回结果
              this.$toast(result.data);
              console.log(result.data)
            //   判断返回结果是否登录成功
              if(result.data=='用户名或密码错误'){}else{   
                //   将用户名插入缓存保持登录状态
             sessionStorage.setItem('name',this.Username)
             this.$router.push({ path:'/cmd'})
              }
          }).catch((err)=>{
              console.log(err)
          })
        }
       }
    }
}
</script>
<style>
    #inputbox{
        width:80%;
        padding-top:51px; 
        margin: 0 auto;
    }
    #inputbox input{
     padding-left:45px; 
    background-repeat:no-repeat;
    }
    .user{
 background: url(../../assets/user.png); 
 background-size:40px 40px;
    }
    .upwd{
  background: url(../../assets/密码.png); 
  background-size:32px 34px;
    }
    #inputbox button{
        height:40px; 
        width:100%;
        border-radius:10px;
         background: -webkit-gradient(linear, 50% 0, 50% 100%, from(#fc7e7e), to(#ef4747));
         color:ivory;
         margin-bottom:20px; 
    }
    .Account{
        display: flex;
        width: 80%;
        margin: 0 auto
    }
    .Account p{
        width: 50%;

        font-size: 18px;
    }
     .Account a{
         color:#4e4e4e;
         }
.p-left{
    text-align: left;
}
.p-right{
    text-align: right;
}

</style>