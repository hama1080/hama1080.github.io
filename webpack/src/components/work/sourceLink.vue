<template>
  <el-row>
    <el-col :offset="18" :span="6" :xs="{span: 10, offset: 14}">
      <a :href="address">
        <el-button plain class="link-button">
          <custom-icon name="github" base-class="custom-icon"></custom-icon>
          <div class="source-text">Source</div>
        </el-button>
      </a>
    </el-col>
  </el-row>
</template>

<script>
import customIcon from 'vue-icon/lib/vue-feather.esm.js'

export default{
  name: 'sourcelink',
  components: {
    customIcon
  },
  props: ['address']
}
</script>

<style scoped>
.link-button{
  font-size: 120%;
  padding: 5px 10px;
  margin: 15px;
}

.v-icon,
.custom-icon {
  width: 20px;
}
</style>
