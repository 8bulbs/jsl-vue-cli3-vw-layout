import Vue from 'vue'
import App from './App.vue'

const vub = require('viewport-units-buggyfill')

window.addEventListener('load', () => {
  vub.init({ hacks: window.viewportUnitsBuggyfillHacks })
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
