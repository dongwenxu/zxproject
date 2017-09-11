import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入路由组件
import index from '@/components/index'
import login from '@/components/login'
import ex2 from '@/components/ex2'
import ex3 from '@/components/ex3'
import notFound from '@/components/notfound'


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/ex2',
      name: 'ex2',
      component: ex2
    },
    {
      path: '/ex3',
      name: 'ex3',
      component: ex3
    },
    {
      path:'*',
      component:notFound
    }

  ]
})

// 判断是否登录
router.beforeEach((to, from, next) => {
  let val = sessionStorage.getItem('xunLogin');
      // val ? next() : next({path: '/login'});
  if (to.meta.requireAuth) {
    if (val) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    console.log(1);
    next()
  }
})

export default router