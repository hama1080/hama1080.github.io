<template>
  <div id="menu">
    <el-menu :default-active="activeIndex" mode="horizontal" class="top-bar" router="true" @select="handleSelect"
             background-color="#f5f2ed" text-color="#333" active-text-color="#ff6347">
      <el-menu-item index="/">About</el-menu-item>
      <el-menu-item index="/Works">Works</el-menu-item>
      <el-menu-item index="/Photos">Photos</el-menu-item>
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
  width:270px;
  margin: 0 auto 30px auto;
}
.el-menu-item{
  width: 90px;
  height: 30px;
  line-height: 30px;
  font-size: 100%;
  text-align: center;
}
</style>
