import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import noy from './components/cmd.vue'
import to from './components/cmd/to.vue'
import sy from './components/cmd/data01.vue'
Vue.use(Router)
import tion from './components/cmd/datation.vue'
import cart from './components/cmd/cart.vue'
import Sign from './components/cmd/Sign.vue'
import register from './components/cmd/register.vue'
import PersonalCenter from './components/cmd/PersonalCenter.vue'
import spxq from './components/cmd/Commoditydetails.vue'
import search from './components/cmd/search.vue'
import fle from './components/cmd/classification.vue'
import refresh from './components/cmd/refresh.vue'
import chlist from './components/cmd/chlist.vue'
export default new Router({
  routes: [

   {path:'/',redirect:'/cmd'},
  {path:'/cmd',component:noy},
    // {path:'/cmd',component:noy},
    {path:'/to',component:to},
    {path:'/sy',component:sy},
    {path:'/tion',component:tion},
    {path:'/cart',component:cart},
    {path:'/Sign',component:Sign},
    {path:'/register',component:register},
    {path:'/my',component:PersonalCenter},
    {path:'/spxq',component:spxq},
    {path:'/search',component:search},
    {path:'/fle',component:fle},
    {path:'/refresh',component:refresh},
    {path:'/chlist',component:chlist}
  ]
})
