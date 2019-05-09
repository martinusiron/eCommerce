import Vue from 'vue'
import Router from 'vue-router'
import Delivery from '@/components/Delivery'
import Payment from '@/components/Payment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Delivery',
      component: Delivery
    },  
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    }
  ]
})
