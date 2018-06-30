<template>
  <div>
    <work
      title="HexMan2"
      date="2017/3"
      description="Unreal Engine 4を利用して作成した2人対戦用ゲーム．アイスクライマーのように，上へと登っていきつつ，ボンバーマンのように爆弾を置き，相手を倒すことが目的．所々に崩れる床や，便利アイテムを配置することで，ゲームに面白みを付加している．"
      v-bind:screenShots="['/static/works/hexMan2/title.png', '/static/works/hexMan2/charactor_select.png', '/static/works/hexMan2/playing.png']"
      v-bind:technologies="['Unreal Engine 4']"
      sourceAddress=""
    ></work>
  </div>
</template>

<script>
import work from './work.vue'

export default {
  name: 'hexMan2',
  components: {
    work
  }
}
</script>

<style scoped>

</style>
