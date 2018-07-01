<template>
  <div id="menu">
    <el-menu :default-active="activeIndex" mode="horizontal" class="top-bar" :router=true
             background-color="#f5f2ed" text-color="#333" active-text-color="#ff6347">
      <el-menu-item class = "item" index="/">About</el-menu-item>
      <el-menu-item class = "item" index="/Works">Works</el-menu-item>
      <el-menu-item class = "item" index="/Photos">Photos</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {
      activeIndex: '/'
    }
  },
  created: function () {
    this.activeIndex = this.$route.path
  }
}
</script>

<style scoped>
div#menu {
  width:270px;
  margin: 0 auto 30px auto;
}
.item{
  width: 90px;
  height: 30px;
  line-height: 30px;
  font-size: 100%;
  text-align: center;
}
</style>
