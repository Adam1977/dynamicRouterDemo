import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		list: [
			{
				name: '一级菜单',
				title: '一级菜单',
				path: '/hhh',
				component: 'Layout'
				// children: [
				//   {
				//     path: '/hhh',
				// name: '二级菜单',
				// title: '二级菜单',
				//     component: '../views/Home.vue'
				//   }
				// ]
			},
			{
				name: '一级菜单1',
				title: '一级菜单1',
				path: '/lll',
				component: '@/views/About.vue'
			}
		],
		fakeRouter: {
			router: [
        {
					path: '/',
					name: 'Home',
					component: 'Layout',
				},
				{
					path: '/dashboard',
					name: '111',
					component: 'Layout',
					redirect: '/dashboard',
					children: [
						{
							path: '/dashboard',
							component: 'views/About.vue',
							name: '首页'
						}
					]
				},
				{
					path: '/example',
					component: 'Layout',
					name: 'Example',
					title: '案例',
					children: [
						{
							path: '/example',
							name: 'Table',
							component: 'views/Demo',
								title: '表格',
								icon: 'table'
						},
          ]
        }
				// 		{
				// 			path: 'tree',
				// 			name: 'Tree',
				// 			component: '@/views/Home',
				// 			meta: {
				// 				title: '树形菜单',
				// 				icon: 'tree'
				// 			}
				// 		}
				// 	]
				// },
				// {
				// 	path: '/form',
				// 	component: 'Layout',
				// 	children: [
				// 		{
				// 			path: 'index',
				// 			name: 'Form',
				// 			component: '@/views/Home',
				// 			meta: {
				// 				title: '表单',
				// 				icon: 'form'
				// 			}
				// 		}
				// 	]
				// },
				// {
				// 	path: '*',
				// 	redirect: '/404',
				// 	hidden: true
				// }
			]
		}
	},
	mutations: {},
	actions: {},
	modules: {}
})
