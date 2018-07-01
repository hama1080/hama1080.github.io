<template>
  <transition name="body" appear>
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
                    <span v-html="description"></span>
                  </el-col>
                </el-row>
              </div>

              <div class = "screen-shots">
                <div v-if="screenShots.length == 0"></div>
                <div v-else-if="screenShots.length == 1">
                  <img v-bind:src=screenShots[0] style="max-width: 100%">
                </div>
                <div v-else>
                  <el-carousel :height=carouselHeight trigger="click" indicator-position="outside" :autoplay=false>
                    <el-carousel-item v-for="(path, index) in screenShots" :key="index">
                      <img v-bind:src=path style="max-width: 100%">
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>

              <div class="technologies">
                <div class="tech-header">Technologies</div>
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
  </transition>
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
  },
  data () {
    return {
      carouselHeight: '300px'
    }
  },
  methods: {
    resizeWindow: function () {
      if (window.innerWidth < 768) {
        this.carouselHeight = '150px'
      } else {
        this.carouselHeight = '300px'
      }
    }
  },
  created: function () {
    this.resizeWindow()
    window.addEventListener('resize', this.resizeWindow, false)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.resizeWindow, false)
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

.tech-header{
  margin: 10px 0;
  font-weight: bold;
}
.tech{
  margin: 0 5px;
}

/* transition */
.body-enter-active{
  transition: opacity 1s;
}

.body-leave-active{
  transition: opacity 0s;
}

.body-enter, .body-leave-to{
  opacity: 0;
}
</style>
