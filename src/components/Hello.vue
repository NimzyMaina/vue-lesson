<template>
	<h1 v-show="isShow" @click="dong">Title ya Component</h1>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false
			}
		},
		created() {
			Event.listen('qwerty', () => this.isShow = !this.isShow)
		},
		methods: {
			dong() {
				Event.fire('ytrewq')
			}
		}
	}
</script>