import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Down from '@/view/Down'
import Shui from '@/view/Shui'
import Login from '@/view/Login'
import Search from '@/view/Search'
import XinNav from '@/view/XinNav'
import Content from '@/view/Content'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[{
        path:'shui',
        name : 'Shui',
        component: Shui
      },
      {
        path: 'content',
        name: 'Content',
        component: Content
      }]
    },
    {
    	path: '/search',
    	name: 'Search',
    	component: Search
    },
    {
    	path: '/down',
    	name: 'Down',
    	component: Down
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
      path: '/xinnav',
      name: 'XinNav',
      component: XinNav
    }
  ]
})
