import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Content from '../views/Content.vue'
import BlogDetails from '../views/BlogDetails.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Blog',
    component: Blog
  },
  {
    path: '/Content',
    component: Content
  },
  {
    path:'/BlogDetails/:aid',
    component:BlogDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
