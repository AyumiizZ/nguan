import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Add bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// END add bootstrap-vue

// Add font-awesome
// Font Awesome by Dave Gandy - http://fontawesome.io
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// END add font-awesome

// Add ECharts
const ECharts = require('vue-echarts')
Vue.component('v-chart', ECharts)
// END add ECharts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
