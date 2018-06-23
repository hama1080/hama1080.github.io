<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card>
          <el-row>
            <el-col :span="24">
              <h2>Reversi</h2>
              <h3>2011</h3>

              <!-- Description -->
              <div>
                C言語+GrWinで作成したリバーシ(オセロ)ゲーム
              </div>

              <!-- Screen shots -->
              <el-carousel trigger="click" indicator-position="outside" :autoplay=false>
                <el-carousel-item>
                  <img src="/static/works/reversi/figure0.png">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/static/works/reversi/figure1.png">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/static/works/reversi/figure2.png">
                </el-carousel-item>
              </el-carousel>

              <!-- Technologies -->
              <div>
                <span class="tech">Technologies:</span>
                <span class="tech">C</span>
                <span class="tech">GrWin</span>
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
