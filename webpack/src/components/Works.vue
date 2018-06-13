<template>
  <div>

    <div v-for="(work, index) in works_history" :key="index">
      <h2>{{ work.year }}</h2>
      <el-row>
        <el-col :span="6" v-for="(o, index) in work.details" :key="index" :offset="(index % 3) === 0 ? 1 : 2" >
          <el-card>
            <img v-bind:src="o.img_src"/>
            {{ o.name }}
          </el-card>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Works',
  data () {
    return {
      works_history: [
        {
          year: 2018,
          details: [
            {
              name: '2018Work0',
              img_src: '/static/logo.png'
            },
            {
              name: '2018Work1',
              img_src: '/static/logo.png'
            }
          ]
        },
        {
          year: 2017,
          details: [
            {
              name: '2017Work0',
              img_src: '/static/logo.png'
            },
            {
              name: '2017Work1',
              img_src: '/static/logo.png'
            },
            {
              name: '2017Work2',
              img_src: '/static/logo.png'
            }

          ]
        }
      ]
    }
  }

}
</script>

<style scoped>

</style>
