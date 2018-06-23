import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import feather from 'vue-icon'
import About from '@/components/About'
import Works from '@/components/Works'
import Photos from '@/components/Photos'

import Portfolio from '@/components/work/portfolio'
import hiraganaGAN from '@/components/work/hiraganaGAN'
import bitcoinPriceChecker from '@/components/work/bitcoinPriceChecker'
import wagayakane from '@/components/work/wagayakane'
import hexMan2 from '@/components/work/hexMan2'
import forecastBoard from '@/components/work/forecastBoard'
import hexMan from '@/components/work/hexMan'
import digitalClock from '@/components/work/digitalClock'
import handMadeCPU from '@/components/work/handMadeCPU'
import fileViewer from '@/components/work/fileViewer'
import reversi from '@/components/work/reversi'

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
      component: Photos
    },
    {
      path: '/work/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/work/hiraganaGAN',
      name: 'hiraganaGAN',
      component: hiraganaGAN
    },
    {
      path: '/work/bitcoinPriceChecker',
      name: 'bitcoinPriceChecker',
      component: bitcoinPriceChecker
    },
    {
      path: '/work/wagayakane',
      name: 'wagayakane',
      component: wagayakane
    },
    {
      path: '/work/hexMan2',
      name: 'hexMan2',
      component: hexMan2
    },
    {
      path: '/work/forecastBoard',
      name: 'forecastBoard',
      component: forecastBoard
    },
    {
      path: '/work/hexMan',
      name: 'hexMan',
      component: hexMan
    },
    {
      path: '/work/digitalClock',
      name: 'digitalClock',
      component: digitalClock
    },
    {
      path: '/work/handMadeCPU',
      name: 'handMadeCPU',
      component: handMadeCPU
    },
    {
      path: '/work/fileViewer',
      name: 'fileViewer',
      component: fileViewer
    },
    {
      path: '/work/reversi',
      name: 'reversi',
      component: reversi
    }
  ]
})
