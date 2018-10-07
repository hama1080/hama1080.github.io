<template>
  <div>
    <work
      title="我が家のあかねちゃんプロジェクト"
      date="2017/8"
      description="友人と共に実施した，我が家のあかねちゃんプロジェクト．自作スマートスピーカーのようなもの．売り文句は，'ラズパイことraspberry piを使って音声認識やらTwitterから家電を操作できるやつを作ってみました'．詳細はWebページや，動画を参照．<a href='http://wagayakane.html.xdomain.jp/index.html'>公式サイト</a>"
      v-bind:screenShots="['/static/works/wagayakane/figure0.png']"
      v-bind:technologies="['Python', 'Raspberry Pi', 'MMD(Miku Miku Dance)']"
      sourceAddress="https://github.com/hama1080/WagayaNoAkaneChan"
    ></work>
  </div>
</template>

<script>
import work from './work.vue'

export default {
  name: 'wagayakane',
  components: {
    work
  }
}
</script>

<style scoped>

</style>
