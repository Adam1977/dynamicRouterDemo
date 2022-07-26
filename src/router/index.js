import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'
const _import = require('./_import')

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})


// var isState = false
// router.beforeEach((to, from, next) => {
//   console.log(isState)
// 	if (!isState) {
// 		const list = store.state.list
// 		list.forEach((val) => {
//       if (val.component === 'Layout') {
//         val.component = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//         router.addRoute(val)
//       } else {
//         router.addRoute({
//           ...val,
//           component: _import(val.component)
//         })
//       }
// 		})
// 		isState = true
// 	}
// 	next()
// })

export default router
