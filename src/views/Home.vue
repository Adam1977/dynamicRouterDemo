<template>
	<div class="home">
		<div v-for="(item, index) in list" :key="index">
			<div @click="jumpTo(item.path)">{{ item.name }}</div>
			<template v-if="item.children">
				<div
					v-for="(subItem, subIndex) in item.children"
					:key="subIndex"
					class="mg-l20"
					@click="jumpTo(subItem.path)"
				>
					{{ subItem.name }}
				</div>
			</template>
		</div>
		<router-view />
	</div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
	name: 'Home',
	data() {
		return {}
	},
	computed: {
		...mapState({
			list: (state) => state.fakeRouter.router
		})
	},
	methods: {
		jumpTo(path) {
			console.log(path)
			this.$router.push({
				path
			})
		}
	}
}
</script>
