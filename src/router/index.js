import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/index.vue'
import Location from '../components/location/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    }
  ]
})
