import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import StepOne from '@/components/module/stepOne'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[{
        path: '/',
        name: 'StepOne',
        component: StepOne,
      }]
    }

  ]
})
