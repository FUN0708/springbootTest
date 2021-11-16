<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
<!--      <h3>{{ item }}</h3>-->
      <img :src="src">
    </el-carousel-item>
  </el-carousel>
<!--  <el-image :src="src">-->
<!--    <div slot="placeholder" class="image-slot">-->
<!--      加载中<span class="dot">...</span>-->
<!--    </div>-->
<!--  </el-image>-->
</template>
<script>
// 首页现实走马灯的效果，获取后台的图片数据
export default {
  name: 'IndexImg',
  data () {
    return {
      // images: [],
      src: require('@/assets/logo.png')
    }
  },
  // mounted: function () {
  //   this.initImages()
  // },
  // initImages () {
  //   this.$axios
  //     .get('/images/getImages', {
  //     })
  //     .then(resp => {
  //       this.images = resp.data
  //     })
  //     .catch(failResponse => {
  //     })
  // }
}
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
