// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import {Bus} from './bus.js'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.config.productionTip = false

// 引入mock
require('./mock.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

Vue.filter('getYMD', function (input) {
  return input.split(' ')[0]
})
