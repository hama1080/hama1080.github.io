<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card>
          <el-row>
            <el-col :span="24">
              <h2>ひらがなGAN</h2>
              <h3>2018/3</h3>

              <!-- Description -->
              <div>
                GANを用いた手書きひらがな文字の生成
              </div>

              <!-- Screen shots -->
              <el-carousel trigger="click" indicator-position="outside" :autoplay=false>
                <el-carousel-item>
                  <img src="/static/works/hiraganaGAN/learning_flow.gif">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/static/works/hiraganaGAN/learning_result.png">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/static/works/hiraganaGAN/yakiniku.png">
                </el-carousel-item>
              </el-carousel>

              <!-- Technologies -->
              <div>
                <span class="tech">Technologies:</span>
                <span class="tech">Python</span>
                <span class="tech">Keras(TensorFlow)</span>
                <span class="tech">GAN(Generative Adversarial Network)</span>
              </div>

              <!-- Source link -->
              <sourceLink address=""></sourceLink>

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
