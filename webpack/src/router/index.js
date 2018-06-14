import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import feather from 'vue-icon'
import About from '@/components/About'
import Works from '@/components/Works'
import Photographs from '@/components/Photographs'

Vue.use(Router)
Vue.use(ElementUI, {locale})
Vue.use(feather, 'v-icon')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: About
    },
    {
      path: '/1',
      name: 'Profile',
      component: About
    },
    {
      path: '/2',
      name: 'Works',
      component: Works
    },
    {
      path: '/3',
      name: 'Photographs',
      component: Photographs
    }
  ]
})
