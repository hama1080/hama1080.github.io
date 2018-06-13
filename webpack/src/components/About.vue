<template>
  <div>
    <el-card>

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
            <h2>Skills</h2>
          </el-col>
          <el-col :span="16" align="left">
            <h2></h2>
          </el-col>
        </el-col>
      </el-row>

      <el-row gutter="20">
        <el-col :span="24">
          <el-col :span="8" align="right">
            <h2>Social</h2>
          </el-col>
          <el-col :span="16" align="left">
          </el-col>
        </el-col>
      </el-row>

      <el-row gutter="20">
        <el-col :span="24">
          <el-col :span="8" align="right">
            <h2>Recentry Works</h2>
          </el-col>
          <el-col :span="16" align="left">
          </el-col>
        </el-col>
      </el-row>

    </el-card>
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

</style>
