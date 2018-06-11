<template>
  <div id="menu">
    <el-menu :default-active="activeIndex" mode="horizontal" class="top-bar" @select="handleSelect">
      <el-menu-item index="1">Profile</el-menu-item>
      <el-menu-item index="2">Works</el-menu-item>
      <el-menu-item index="3">Photographs</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
div#menu {
  width:500px;
  margin: 0 auto 30px auto;
}
.el-menu-item{
  height: 40px;
  line-height: 40px;
  font-size: 100%;
}
</style>
