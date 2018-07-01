<template>
  <transition name="body" appear>
    <div v-show="show">
      <el-row>
        <el-col :span="24">
          <img src="/static/profile_picture.png"/>
          <h1>@hama903</h1>
          <h1>Takuto Hamano</h1>
          <h2>Software engineer with the knowledge of hardware.</h2>
        </el-col>
      </el-row>

      <el-row id="skills">
        <el-col :span="24">
          <div class="skill-header">Skills</div>
          <span class="skill">C/C++</span>
          <span class="skill">Python</span>
          <span class="skill">PhysX</span>
          <span class="skill">Electronics</span>
        </el-col>
      </el-row>

      <el-row id="social">
        <el-col :span="24">
          <a href="https://github.com/hama903"><custom-icon name="github" base-class="custom-icon"></custom-icon></a>
          <a href="https://twitter.com/hama903"><custom-icon name="twitter" base-class="custom-icon"></custom-icon></a>
          <a href="https://www.instagram.com/hama903_/"><custom-icon name="instagram" base-class="custom-icon"></custom-icon></a>
          <a href="https://www.linkedin.com/in/takutohamano/"><custom-icon name="linkedin" base-class="custom-icon"></custom-icon></a>
        </el-col>
      </el-row>
    </div>
  </transition>
</template>

<script>
import customIcon from 'vue-icon/lib/vue-feather.esm.js'

export default {
  name: 'Profile',
  components: {
    customIcon
  },
  data () {
    return {
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#skills{
  margin: 20px 0;
}
#social{
  margin: 40px 0;
}

.skill-header{
  margin: 10px 0;
  font-size: 120%;
  font-weight: bold;
}
.skill{
  font-size: 120%;
  margin: 0 10px;
}

.v-icon,
.custom-icon {
  width: 30px;
  margin: 0 10px;
}

a:link { color: #333; }
a:visited { color: #333; }
a:hover { color: #ff6347; }
a:active { color: #ff6347; }

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
