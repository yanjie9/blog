import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
//import About from '../components/About.vue'
import AddBlog from '../components/AddBlog.vue'
import Blog from '../components/Blog.vue'
import Classify from '../components/Classify.vue'
import Message from '../components/Message.vue'
//import PersonInf from '../components/PersonInf.vue'
//import Picture from '../components/Picture.vue'
import seeComment from '../components/seeComment.vue'
import changeBlog from '../components/changeBlog.vue'

Vue.use(VueRouter)
 
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/Home',
    component: Home,
    children: [
     /*  {
        path: "/Home/About",
        component: About
      }, */
      {
        path: "/Home/AddBlog",
        component: AddBlog
      },
      {
        path: '/Home/Blog',
        component: Blog,
        children: [
          {
            path: '/Home/Blog/changeBlog',
            component: changeBlog
          },
          {
            path: '/Home/Blog/seeComment',
            component: seeComment
          }
        ]
      },
      {
        path: '/Home/Classify',
        component: Classify
      }
      , {
        path: "/Home/Message",
        component: Message
      }/* ,
      {
        path: '/Home/PersonInf',
        component: PersonInf
      }
      , {
        path: "/Home/Picture",
        component: Picture
      } */
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
