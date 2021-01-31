<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 显示器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">健康 儿童</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">耳机 音箱</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
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
@import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .index{
    .swiper-box{
      .nav-menu{
        position: absolute;
        width: 264px;
        height: 460px;
        z-index: 9;
        padding: 20px 0;
        background-color: #55585a7a;
        box-sizing: border-box;
        .menu-wrap{
          .menu-item{
            height: 42px;
            line-height: 42px;
            a{
              position: relative;
              display: block;
              font-size: 14px;
              color: #FFFFFF;
              padding-left: 30px;
              &:after{
                position: absolute;
                right: 30px;
                top: 13.5px;
                content: ' ';  //要给它加一个站位，否则不会生效
                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
              }
            }
            &:hover{
              background-color: $colorA;
            }
          }
        }
      }
      .swiper-container{
        height: 460px;
        .swiper-button-prev{
          left: 274px;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>