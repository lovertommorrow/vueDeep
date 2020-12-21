import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import('../views/demo/Index.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router