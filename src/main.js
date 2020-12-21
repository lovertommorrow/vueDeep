import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/Index.scss'
import './directives/main'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
