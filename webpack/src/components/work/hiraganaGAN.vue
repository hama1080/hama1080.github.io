<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card class="work-card">
          <el-row>
            <el-col :span="24">
              <h2>ひらがなGAN</h2>
              <h3>2018/3</h3>

              <div class="description">
                <a href="http://dl4us.com/">DL4US</a>の課題で実施した，GANを用いた手書きひらがな文字の生成．<br>
                学習には，産業技術総合研究所が公開している，ETL文字データベースを利用．<br>
                学習後に任意のひらがな文字を生成可能とするため，ネットワーク構造にはConditional GANを利用した．<br>
              </div>

              <div class="screen-shots">
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
              </div>

              <div class="technologies">
                <span class="tech">Technologies:</span>
                <span class="tech">Python</span>
                <span class="tech">Keras(TensorFlow)</span>
                <span class="tech">Conditional GAN</span>
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
.work-card{
  margin: 0 0 50px 0;
}

.description, .screen-shots, .description{
  margin: 30px 0;
}

.tech{
  margin: 0 5px;
}

</style>
