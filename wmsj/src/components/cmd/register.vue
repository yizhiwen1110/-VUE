<template>
    <div class="register">
       <div class="images">
              <router-link to='./cmd'><img id="fh" src="../../assets/返回.png" alt=""> </router-link>
        <img src="https://safestatic.games.wanmei.com/passport/reg/images/icon.png" alt="">   
        </div> 
        <div id="information">
            <input v-model="sjh"  @blur='unames' placeholder="输入手机号" type="text">
            <img :src="'http://127.0.0.1:3000/'+a+'.png'" alt="">
            <p>{{uname}}</p>

            <input v-model="mm"  @blur='upwds'  placeholder="输入密码" type="password">
            <img :src="'http://127.0.0.1:3000/'+b+'.png'" alt="">
            <p>{{upwd}}</p>

            <input v-model="xm"   @blur='names' placeholder="输入姓名" type="text">
              <img :src="'http://127.0.0.1:3000/'+c+'.png'" alt="">
            <p>{{name}}</p>

            <input v-model="sfz"  @blur='sfs'  placeholder="输入身份证" type="text">
             <img :src="'http://127.0.0.1:3000/'+d+'.png'" alt="">
            <p>{{sf}}</p>

                     <button @click="pdd">立即注册</button>

        </div>
    </div>
</template>
<script>
 
export default {
    data(){
        return{
            uname:'',
            upwd:'',
            name:'',
            sf:'',
            a:'',
            b:'',
            c:'',
            d:'',
            sjh:'',
            mm:'',
            xm:'',
            sfz:''
        }
    },
    methods:{
      // 使用正则验证文本框内容
      unames(){
          var regular=/^1[3|4|5|8][0-9]\d{4,8}$/;
        if(regular.test(this.sjh)){
             this.uname='此账号可用'
             this.a='正确'
        }else{
              this.uname='手机号格式不正确'
              this.a='错误'
        }
      },
        upwds(){
          var regular=/^\w{6,9}$/;
        if(regular.test(this.mm)){
             this.upwd=' '
             this.b='正确'
        }else{
              this.upwd='密码必须为数字或者数字加字母'
              this.b='错误'
        }
      },
        names(){
          var regular=/^[\u2E80-\u9FFF]{2,5}$/;
        if(regular.test(this.xm)){
             this.name=''
             this.c='正确'
        }else{
              this.name='真实姓名格式不对'
              this.c='错误'
        }
      },
        sfs(){
          var regular=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if(regular.test(this.sfz)){
             this.sf=''
             this.d='正确'
        }else{
              this.sf='请输入正确的身份证号码'
              this.d='错误'
        }
      },
pdd(){
 var a=this.a
 var b=this.b
 var c=this.c
 var d=this.d
    if(a==b && b==c && c==d && d=='正确'){
      // 判断为ture就执行ajax插入数据库
        var url='userlist'
        this.axios.get(url,{params:{Phone:this.sjh,Userpassword:this.mm,Realname:this.xm,IDnumber:this.sfz}}).then((result)=>{
          // 注册成功弹窗
          this.$toast(result.data);
          // 插入缓存
          sessionStorage.setItem('name',this.sjh)
          // 注册成功后跳转
          var n=sessionStorage.getItem('name')
           if(n){
               this.$router.push({ path:'/cmd'})
           }
        }).catch((err)=>{
          console.log(err)
        })
    }else{
      // 验证不通过
       this.$toast('请输入正确的用户信息')
    }
}


    }
}
</script>
<style>
.register{
    width: 80%;
    margin: 35px auto 0;
}     
.images{
       position: relative;
}
    .images img{
      width: 25%;
      height:25%;  
    }
    #information{
        margin-top:35px 
    }
    #information input{
        margin-bottom:40px; 
         position: relative; 
    }
    #information button{
        width: 100%;
       background: #fe5252;
           color: #fff;
               border-radius: 0.5rem;
    }
    #information p{
        margin-top: -30px;
        text-align: left;
        color:red
    }
    #information img{
        position: absolute;
        margin-top:10px;
        margin-left:5px;  
        width: 20px;
        height:20px
    }
    #fh{
       position:absolute;
       left: 0;
     width:10%;
     height:80%; 
    }
</style>