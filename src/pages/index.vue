<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a v-bind:href="'/#/product/'+item.id"><img :src="item.img"></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
import 'swiper/css/swiper.css'
export default {
  name:'index',
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
  },
  data() {
    return {
      swiperOption:{
        autoplay: true,   //自动播放，否则它不会播放
        loop: true,       //循环播放，否则最后一张点击下一张就动不了了
        effect: 'fade',   //动画类型
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable : true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList:[
        {
          id:'42',
          img:'/imgs/slider/slide-1.jpg'
        }, {
          id:'45',
          img:'/imgs/slider/slide-2.jpg'
        }, {
          id:'46',
          img:'/imgs/slider/slide-3.jpg'
        }, {
          id:'42',
          img:'/imgs/slider/slide-4.jpg'
        }, {
          id:'42',
          img:'/imgs/slider/slide-5.jpg'
        },
      ]
    }
  },
}
</script>

<style lang="scss">
  .index{
    .swiper-box{
      .swiper-container{
        height: 451px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>