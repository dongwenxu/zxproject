import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import buy from '@/components/buy'
import active from '@/components/active'
import person from '@/components/person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/active',
      name: 'active',
      component: active
    },
    {
      path: '/person',
      name: 'person',
      component: person
    }
  ]
})
