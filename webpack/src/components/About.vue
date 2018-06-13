<template>
  <div>
    <el-row>
      <el-col :span="24">
        <img src="../assets/profile_picture.jpg" style="width: 20%;"/>
        <h1>hmhm903</h1>
        <h2>Software engineer with the knowledge of hardware.</h2>
      </el-col>
    </el-row>

    <el-row gutter="20">
      <el-col :span="24">
        <el-col :span="8" align="right">
          <div class="sub-title">Skills</div>
        </el-col>
        <el-col :span="16" align="left">
          <div class="skill">C++</div>
          <div class="skill">Python</div>
        </el-col>
      </el-col>
    </el-row>

    <el-row gutter="20">
      <el-col :span="24">
        <el-col :span="8" align="right">
          <div class="sub-title">Social</div>
        </el-col>
        <el-col :span="16" align="left">
          <div class="social">Github</div>
          <div class="social">Twitter</div>
        </el-col>
      </el-col>
    </el-row>

    <el-row gutter="20">
      <el-col :span="24">
        <div class="sub-title">Recently Works</div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sub-title{
  font-size: 150%;
  padding: 10px 0;
}

.skill, .social{
  float: left;
  font-size: 150%;
  margin-right: 20px;
  padding: 10px 0;
}
</style>
