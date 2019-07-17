import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import'mint-ui/lib/style.css'
Vue.use(MintUI);
//  import './font/iconfont.css'
import axios from './axios'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false
import { Toast } from 'mint-ui';
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { Search } from 'mint-ui';
Vue.component(Search.name, Search);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
