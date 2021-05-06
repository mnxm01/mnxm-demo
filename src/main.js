import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Live2d from 'mnxm-live2d-vue'

Vue.component('Live2d', Live2d);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
