<template>
  <div>
    <work
      title="Portfolio"
      date="2018"
      description="Vue.jsを利用したポートフォリオサイト．UIライブラリとしてElement UIを利用．これまでに作ったものや，撮影した写真を掲載．"
      v-bind:screenShots="['/static/works/portfolio/figure0.png']"
      v-bind:technologies="['HTML/CSS', 'Vue.js', 'Element UI']"
      sourceAddress="https://github.com/hama903/hama903.github.io"
    ></work>
  </div>
</template>

<script>
import work from './work.vue'

export default {
  name: 'portfolio',
  components: {
    work
  }
}
</script>

<style scoped>

</style>
