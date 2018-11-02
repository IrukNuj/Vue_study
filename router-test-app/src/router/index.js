import Vue from 'vue'
import Router from 'vue-router'

import Home from '../view/Home'
import ProductList from '../view/ProductList'
import Product from '../view/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home },
    {
      name: 'ProductList',
      path: '/product',
      component: ProductList },
    {
      path: '/hoge/hanya',
      redirect: {name: 'Home'}
    },
    {
      path: '/product/:id(\\d+)',
      component: Product,
      props: route => ({
        id: Number(route.params.id)
      })
    }
  ]

})
