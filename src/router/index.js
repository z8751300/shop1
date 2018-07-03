import Vue from 'vue'
import Router from 'vue-router'
import test from '../components/test.vue'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'Msite',
      component: Msite,
      meta: {
        showFooter: true,
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter: true,
      }
    },
    {
      path: '/order',
      name: 'order',
      component:Order,
      meta: {
        showFooter: true,
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component:Profile,
      meta: {
        showFooter: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
