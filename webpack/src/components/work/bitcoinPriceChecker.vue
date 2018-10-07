<template>
  <div>
    <work
      title="Bitcoin Price Checker"
      date="2017/10"
      description="Raspberry Pi Zero Wと，7セグLEDを利用し，現在のビットコイン価格を表示する装置．bitflyerのオープンAPIを利用し，取得したビットコイン価格を，ほぼリアルタイムで表示する．小型であるため，部屋のインテリアとしても利用可能．"
      v-bind:screenShots="['/static/works/bitcoinPriceChecker/appearance.png']"
      v-bind:technologies="['Python', 'Raspberry Pi Zero W', 'Dynamic Lighting System']"
      sourceAddress="https://github.com/hama1080/PiBitcoinPriceChecker"
    ></work>
  </div>
</template>

<script>
import work from './work.vue'

export default {
  name: 'bitcoinPriceChecker',
  components: {
    work
  }
}
</script>

<style scoped>
</style>
