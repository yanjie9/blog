import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(vueResource);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
