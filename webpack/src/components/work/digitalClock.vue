<template>
  <div>
    <work
      title="DigitalClock"
      date="2013"
      description="Arduinoと7セグメントLEDを用いたデジタル時計．4桁の7セグLEDをダイナミック点灯方式を利用し，点灯させている．制御基板と表示基板を分けて作成し，立体的に連結することで，スタイリッシュなデザインとしている．"
      v-bind:screenShots="['/static/works/digitalClock/figure0.png', '/static/works/digitalClock/figure1.png', '/static/works/digitalClock/figure2.png']"
      v-bind:technologies="['Arduino', 'Dynamic Lighting System']"
      sourceAddress="https://github.com/hama903/ArduinoDigitalClock"
    ></work>
  </div>
</template>

<script>
import work from './work.vue'

export default {
  name: 'hiraganaGAN',
  components: {
    work
  }
}
</script>

<style scoped>

</style>
