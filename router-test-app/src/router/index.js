import Vue from 'vue'
import Router from 'vue-router'

import Home from '../view/Home'
import Product from '../view/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home },
    {
      name: 'Product',
      path: '/product',
      component: Product },
    {
      path: '/hoge/hanya',
      redirect: {name: 'Home'}
    }
  ]

})
