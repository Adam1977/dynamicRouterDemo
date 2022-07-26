import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './promission'//这里进行路由后台获取的模拟
import 'help.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
