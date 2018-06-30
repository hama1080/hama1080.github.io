<template>
  <div>
    <work
      title="お天気掲示板"
      date="2016/11"
      description="Raspberry Piを用いて，小型液晶に天気予報を表示する装置．天気予報が常に表示されるため，検索やテレビを見るという手間いらずで，日々の天気を確認できる．しかしながら，精度の良い天気予報を取得可能なAPIが見つからず，あまり当てにならない予報となっている．"
      v-bind:screenShots="['/static/works/forecastBoard/figure0.jpg', '/static/works/forecastBoard/figure1.jpg']"
      v-bind:technologies="['Python', 'Raspberry Pi']"
      sourceAddress=""
    ></work>
  </div>
</template>

<script>
import work from './work.vue'

export default {
  name: 'forecastBoard',
  components: {
    work
  }
}
</script>

<style scoped>

</style>
