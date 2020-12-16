import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import OrderSchedule from './components/OrderSchedule'
import OrderCreate from './components/OrderCreate'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: OrderSchedule },
  { path: '/orders', component: OrderCreate }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
