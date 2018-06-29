<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card class="work-card">
          <el-row>
            <el-col :span="24">
              <h2>{{ title }}</h2>
              <h3>{{date}}</h3>

              <div class="description">
                <el-row>
                  <el-col :md="{span: 16, offset: 4}">
                    {{ description }}
                  </el-col>
                </el-row>
              </div>

              <div class = "screen-shots">
                <div v-if="screenShots.length == 0"></div>
                <div v-else-if="screenShots.length == 1">
                  <img v-bind:src=screenShots[0] style="max-width: 100%">
                </div>
                <div v-else>
                  <el-carousel trigger="click" indicator-position="outside" :autoplay=false>
                    <el-carousel-item v-for="(path, index) in screenShots" :key="index">
                      <img v-bind:src=path>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>

              <div class="technologies">
                <span class="tech">Technologies:</span>
                <span class="tech" v-for="(technology, index) in technologies" :key="index">
                  {{ technology }}
                </span>
              </div>

              <sourceLink v-if="sourceAddress!=''" v-bind:address=sourceAddress></sourceLink>

            </el-col>
          </el-row>

        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import sourceLink from './sourceLink.vue'

export default {
  name: 'portfolio',
  components: {
    sourceLink
  },
  props: {
    title: String,
    date: String,
    description: String,
    screenShots: Array,
    technologies: Array,
    sourceAddress: String
  }
}
</script>

<style scoped>
.work-card{
  margin: 0 0 50px 0;
}

.description{
  text-align: left;
}
.description, .screen-shots, .description{
  margin: 30px 0;
}

.tech{
  margin: 0 5px;
}

</style>
