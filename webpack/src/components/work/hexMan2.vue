<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card>
          <el-row>
            <el-col :span="24">
              <h2>HexMan2</h2>
              <h3>2017/3</h3>

              <!-- Description -->
              <div>
                Unreal Engine 4を利用して作成した2人対戦用ゲーム
              </div>

              <!-- Screen shots -->
              <el-carousel height="450px" trigger="click" indicator-position="outside" :autoplay=false>
                <el-carousel-item>
                  <img src="/static/works/hexMan2/title.png">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/static/works/hexMan2/charactor_select.png">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/static/works/hexMan2/playing.png">
                </el-carousel-item>
              </el-carousel>

              <!-- Technologies -->
              <div>
                <span class="tech">Technologies:</span>
                <span class="tech">Unreal Engine 4</span>
              </div>

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
