<template>
  <div>
    <el-row>
      <el-col :span="24">
        <img src="../assets/profile_picture2.jpg" style="width: 20%;"/>
        <h1>@hama903</h1>
        <h2>Software engineer with the knowledge of hardware.</h2>
      </el-col>
    </el-row>

    <el-row gutter="20" id="skills">
      <el-col :span="24">
        <el-col :span="8" align="right">
          <div class="sub-title">Skills:</div>
        </el-col>
        <el-col :span="16" align="left">
          <div class="skill">C/C++</div>
          <div class="skill">Python</div>
          <div class="skill">PhysX</div>
          <div class="skill">Electronics</div>
        </el-col>
      </el-col>
    </el-row>

    <el-row id="social">
      <el-col :span="24">
        <a href="https://github.com/hama903"><custom-icon name="github" base-class="custom-icon"></custom-icon></a>
        <a href="https://twitter.com/hama903"><custom-icon name="twitter" base-class="custom-icon"></custom-icon></a>
        <a href="https://www.instagram.com/hama903_/"><custom-icon name="instagram" base-class="custom-icon"></custom-icon></a>
      </el-col>
    </el-row>

  </div>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sub-title{
  font-size: 120%;
}

.skill{
  float: left;
  font-size: 120%;
  margin-right: 20px;
}

#social{
  margin: 50px 0;
}
.v-icon,
.custom-icon {
  width: 28px;
  margin: 0 10px;
}
</style>
