<template>
  <transition name="body" appear>
    <div>
      <el-row>
        <el-col :span="24">
          <el-card class="photo-card">
            <img src="/static/photos/poonhill.jpg" class="photo">
            <dev class="photo-detail">Poon Hill, Nepal</dev>
          </el-card>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10" :offset="1">
          <el-card class="photo-card">
            <img src="/static/photos/drop0.jpg" class="photo">
          </el-card>
        </el-col>
        <el-col :span="10" :offset="2">
          <el-card class="photo-card">
            <img src="/static/photos/drop1.jpg" class="photo">
          </el-card>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-card class="photo-card">
            <img src="/static/photos/hokuryu.jpg" class="photo">
            <dev class="photo-detail">Hokuryu, Hokkaido, Japan</dev>
          </el-card>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-card class="photo-card">
            <img src="/static/photos/biei.jpg" class="photo">
            <dev class="photo-detail">Biei, Hokkaido, Japan</dev>
          </el-card>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-card class="photo-card">
            <img src="/static/photos/abashiri.jpg" class="photo">
            <dev class="photo-detail">Abashiri, Hokkaido, Japan</dev>
          </el-card>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-card class="photo-card">
            <img src="/static/photos/varanasi.jpg" class="photo">
            <dev class="photo-detail">Varanasi, India</dev>
          </el-card>
        </el-col>
      </el-row>

      <el-row id="social">
        <el-col :span="24">
          <a href="https://www.instagram.com/hama903_/"><custom-icon name="instagram" base-class="custom-icon"></custom-icon></a>
        </el-col>
      </el-row>

    </div>
  </transition>
</template>

<script>
import customIcon from 'vue-icon/lib/vue-feather.esm.js'

export default {
  name: 'Photographs',
  components: {
    customIcon
  }
}
</script>

<style scoped>
.photo-card{
  margin: 20px 5px;
}

.photo{
  width: 100%;
}

.photo-detail{
  color: #AAA;
  font-size: 75%;
  float: right;
}

.v-icon,
.custom-icon {
  width: 30px;
  margin: 20px 0;
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
