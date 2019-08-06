import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Login from '@/views/Login'
import Transaction from '@/components/Transaction'
import Order from '@/components/Order'
import Profile from '@/components/Profile'
import Product from '@/components/Product'
import Invoice from '@/components/invoice'
import NotFound from '@/views/NotFound'
import Layout from '@/components/Layout'
// import Services from '@/views/Services'
// import CrudServices from '@/views/CrudServices'

// import LoginMgt from '@/views/LoginMgt'

Vue.use(Router)

// const test = 0

// var isLogin = function () {
//   return test
// }

function requireAuth (to, from, next) {
  next()
}
// var objLoginMgt = new Vue(LoginMgt)
// function requireAuth (to, from, next) {
//   // objLoginMgt.logout()
//   var vUser = objLoginMgt.currentUser()
//   console.log('vUser', vUser)
//   // vUser = 0
//   if (!vUser) {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }
//     })
//   } else {
//     next()
//   }
// }

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: Invoice,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          beforeEnter: requireAuth,
          component: Order
        },
        {
          path: '/notfound',
          name: 'notfound',
          beforeEnter: requireAuth,
          component: NotFound,
          meta: {
            isPublic: true
          }
        },
        {
          path: '/services',
          name: 'home',
          beforeEnter: requireAuth,
          component: HelloWorld
        },
        {
          path: '/transaction',
          name: 'transaction',
          beforeEnter: requireAuth,
          component: Transaction
        },
        {
          path: '/product',
          name: 'product',
          beforeEnter: requireAuth,
          component: Product
        },
        {
          path: '/order',
          name: 'order',
          beforeEnter: requireAuth,
          component: Order
        },
        {
          path: '/profile',
          name: 'profile',
          beforeEnter: requireAuth,
          component: Profile
        },
        {path: '*', component: NotFound}
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (isLogin()) {
//     console.log('x1')
//     if (to.path === '/login') {
//       console.log('x2')
//       next('/')
//     } else {
//       console.log('x3')
//       if (!to.matched.length) {
//         console.log('x4')
//         next('notfound')
//       } else {
//         console.log('x5')
//         next()
//       }
//     }
//   } else {
//     if (to.path === '/login') {
//       console.log('x6')
//       next()
//     } else {
//       console.log('x7')
//       next('login')
//     }
//   }
// })

export default router
