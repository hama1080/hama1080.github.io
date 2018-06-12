import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import Profile from '@/components/Profile'
import Works from '@/components/Works'
import Photographs from '@/components/Photographs'

Vue.use(Router)
Vue.use(ElementUI, {locale})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/1',
      name: 'Profile',
      component: Profile
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
