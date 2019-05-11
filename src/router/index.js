import Vue from 'vue'
import Router from 'vue-router'
import Delivery from '@/components/Delivery'
import Payment from '@/components/Payment'
import Finish from '@/components/Finish'
import Cart from '@/components/Cart'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Cart',
      component: Cart
    }, 
    {
      path: '/delivery',
      name: 'Delivery',
      component: Delivery
    },  
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/finish',
      name: 'Finish',
      component: Finish
    }
  ]
})
export default router