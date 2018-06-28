<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card>
          <el-row>
            <el-col :span="24">
              <h2>File Viewer Art</h2>
              <h3>2012</h3>

              <!-- Description -->
              <div>
                ファイルの階層構造を，エクスプローラーとは違った形式で表示したメディアアート作品．
                あるディレクトリに含まれるディレクトリは中央付近で回転し，ファイルは周囲を飛び回る．
                操作感は非常に悪いが，見た目的には楽しいものとなっている．
              </div>

              <!-- Screen shots -->
              <el-carousel trigger="click" indicator-position="outside" :autoplay=false>
                <el-carousel-item>
                  <img src="/static/works/fileViewer/animation.gif">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/static/works/fileViewer/figure0.png">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/static/works/fileViewer/figure1.png">
                </el-carousel-item>
              </el-carousel>

              <!-- Technologies -->
              <div>
                <span class="tech">Technologies:</span>
                <span class="tech">C++</span>
                <span class="tech">MFC</span>
              </div>

              <!-- Source link -->
              <!-- <sourceLink address=""></sourceLink> -->

            </el-col>
          </el-row>

        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import sourceLink from './sourceLink.vue'

export default {
  name: 'portfolio',
  components: {
    sourceLink
  }
}
</script>

<style scoped>

.tech{
  margin: 0 5px;
}

</style>
