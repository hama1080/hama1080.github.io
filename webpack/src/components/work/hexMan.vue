<template>
  <div>
    <work
      title="HexMan"
      date="2016/3"
      description="Unreal Engine 4を利用して作成した2人対戦用ゲーム．上下分割画面で，それぞれのキャラクターを操作．ボンバーマンのように爆弾を設置し，相手を倒すことが目的．操作性は非常に悪い．"
      v-bind:screenShots="['/static/works/hexMan/playing.png']"
      v-bind:technologies="['Unreal Engine 4']"
      sourceAddress=""
    ></work>
  </div>
</template>

<script>
import work from './work.vue'

export default {
  name: 'hexMan',
  components: {
    work
  }
}
</script>

<style scoped>

</style>
