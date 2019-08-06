// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLocalStorage from 'vue-localstorage'
import router from './router'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vuetify/dist/vuetify.min.css'
import Print from 'vue-print-nb'
Vue.use(Print)
Vue.use(VueAxios, axios)
Vue.use(Vuetify)
Vue.use(VueLocalStorage)
// Or you can specify any other name and use it via this.$ls, this.$whatEverYouWant
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true
})

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://sirus.libertaapparel.com/produk/'
axios.defaults.headers.common['Authorization'] = 'Bearer' + 'someKey'
axios.defaults.headers.get['Accepts'] = 'application/json'/* eslint-disable no-new */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
