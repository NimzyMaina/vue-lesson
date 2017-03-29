import Vue from 'vue'
import App from './App.vue'

window.Event = new Vue({
	methods: {
		fire(event,data = null){
			this.$emit(event,data);
		},
		listen(event,callback) {
			this.$on(event,callback);
		}
	}
});

new Vue({
	el: '#app',
	render: h => h(App)
})
