//app.js node.js 服务器
//1:第三方模块 
//  express          web服务器
//  cors             跨域
//  express-session  session
//  body-parser      处理post数据
//  multer           上传文件
//  fs               文件操作(内置)
//  mysql            mysql驱动模块 
//下载指令:联网 
//npm i express-session body-parser //multer mysql express cors
//1:引入二个模块  express mysql
const express = require("express");
const mysql = require("mysql");
//2:创建连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  database:"wmuname",
  connectionLimit:15
})
//3:创建express对象
var server = express();
// 4:托管静态资源
server.use(express.static('public'))
//5:处理跨域请求
const cors = require("cors");
server.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//6:添加session功能
const session = require("express-session");
server.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}));
//9:绑定监听端口
server.listen(3000);

// 加载首页数据
server.get('/homedata',(req,res)=>{
  var sql='SELECT * FROM homegoods WHERE details LIKE "%DOTA2%"';
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result)
    }
  })
})
// 用户注册功能实现
server.get('/userlist',(req,res)=>{
  var $Phone=req.query.Phone;
  var $Userpassword=req.query.Userpassword;
  var $Realname=req.query.Realname;
  var $IDnumber=req.query.IDnumber;
  var sql='INSERT INTO UserList SET sid=?,Phone=?,Userpassword=?,Realname=?,IDnumber=?';
  var db=['',$Phone,$Userpassword,$Realname,$IDnumber]
  pool.query(sql,db,(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send('注册成功')
    }else{res.send('注册失败,请稍后再试')}
  })
})
// 用户登录功能实现
server.get('/userlogin',(req,res)=>{
var $Username=req.query.Username
var $Userpassword=req.query.Userpassword
if(!$Username){
  res.send('用户名不能为空')
}
if(!$Userpassword){
  res.send('密码不能为空')
}
var sql='SELECT *FROM UserList WHERE Phone=? AND Userpassword=?';
var db=[$Username,$Userpassword]
pool.query(sql,db,(err,result)=>{
  if(err)throw err;
  if(result.length>0){
    res.send('登录成功')
  }else{
    res.send('用户名或密码错误')
  }
})
})
// 动态加载所有商品详情数据   
server.get('/CommodityInformation',(req,res)=>{
var $sid=req.query.sid
console.log($sid)
var sql='SELECT * FROM commoditydetails WHERE sid=?'
pool.query(sql,[$sid],(err,result)=>{
if(err)throw err;
if(result.length>0){
  res.send(result)
}else{
  res.send('参数错误')
}
})
})
// 搜索功能实现  模糊查询
server.get('/search',(req,res)=>{
  var $name=req.query.name
  var sql=`SELECT * FROM commoditydetails WHERE Name LIKE concat('%',?,'%')`
  pool.query(sql,[$name],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result)
    }else{
      console.log(sql)
      res.send('non')
    }
  })
})
// 加入购物车
server.get('/Shopping',(req,res)=>{
  var sqq='SELECT * FROM shoppingcart WHERE Name=?'
  pool.query(sqq,[req.query.Name],(err,results)=>{
    if(err)throw err;
    if(results.length>0){
 res.send('购物车已有该商品')
    }else{
   var sql='INSERT INTO shoppingcart SET sid=?,Pictures=?,Name=?,Price=?,Number=?'
  pool.query(sql,['',req.query.Pictures,req.query.Name,req.query.Price,req.query.Number],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send('添加成功')
    }else(res.send('网络错误,请重试!'))
  })
    }
  })
})
// 购物车页面获取数据并加载
server.get('/Shoppingcartdata',(req,res)=>{
  var sql='SELECT * FROM shoppingcart WHERE Name LIKE "%DOTA2%"'
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send('non')
    }
  })
})
// 分类加载
server.get('/branch',(req,res)=>{
  var id=req.query.id
  if(id=='z'){
    var sql='SELECT * FROM commoditydetails WHERE Name LIKE "%手机壳%"'
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send('non')
    }
  })
  }else if(id=='x'){
   var sql='SELECT * FROM commoditydetails WHERE Name LIKE "%手办%"'
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send('non')
    }
     })
  }else if(id=='c'){
       var sql='SELECT * FROM commoditydetails WHERE Name LIKE "%帽%"'
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send('non')
    }
     })
  }else if(id=='v'){
           var sql='SELECT * FROM commoditydetails WHERE Name LIKE "%T恤%"'
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send('non')
    }
     })
  }else if(id=='b'){
               var sql='SELECT * FROM commoditydetails WHERE Name LIKE "%毛绒%"'
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send('non')
    }
     })
  }else if(id=='n'){
                   var sql='SELECT * FROM commoditydetails WHERE Name LIKE "%人字拖%"'
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send('non')
    }
     })
  }
})
// 购物车批量删除功能
server.get('/deletes',(req,res)=>{
  var sid=req.query.sid
  // 遍历数组
//   sid.forEach(function(v,i,a){
//       console.log(v)
// });
// 将数组转换成字符串
  var  $sid=sid.join(',')
 console.log($sid)
 var sql='DELETE FROM shoppingcart WHERE sid in ('+$sid+')'
 pool.query(sql,(err,result)=>{
   if(err)throw err;
   if(result.affectedRows>0){
     res.send('删除成功')
   }else{
     res.send('删除失败')
   }
 })
})