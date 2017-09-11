import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'


Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(ElementUI)
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.credentials = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
