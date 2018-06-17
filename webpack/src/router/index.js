import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import feather from 'vue-icon'
import About from '@/components/About'
import Works from '@/components/Works'
import Photographs from '@/components/Photographs'
import Portfolio from '@/components/work/portfolio'

Vue.use(Router)
Vue.use(ElementUI, {locale})
Vue.use(feather, 'v-icon')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works
    },
    {
      path: '/Photos',
      name: 'Photos',
      component: Photographs
    },
    {
      path: '/work/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
