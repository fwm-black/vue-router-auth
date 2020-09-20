import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const page404 = () => import('../views/page404.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/page',
    name: 'page404',
    component: page404
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from , next) => {
  const userToken = localStorage.getItem('lida_study_token')
  const userInfo = localStorage.getItem('lida_study_user')
  console.log(userInfo)
  console.log(userToken)
  if(to.matched.some(res => res.meta.requireAuth)){
    if(userInfo && userToken) {
      next()
    } else {
      next("/")
    }
  } else {
    next()
  }
})

export default router
