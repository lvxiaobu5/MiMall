<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满99元包邮</li>
        <li><span class="icon-after"></span>520余家售后网点</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'service-bar'
}
</script>

<style lang="scss">
  @import './../assets/scss/mixin.scss';
  .service{
    padding: 33px 0;
    color: #666666;
    font-size: 16px;
    li{
      display: inline-block;
      width: 19.8%;
      text-align: center;
      border-right: 1px solid #E5E5E5;
      &:last-child{
        border-right: none;
      }
      span{
        display: inline-block;
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-right: 6px;
        margin-bottom: 4px;
      }
      .icon-setting{
        @include bgImg(24px, 24px, '/imgs/icon-setting.png');
      }
      .icon-7day{
        @include bgImg(24px, 24px, '/imgs/icon-7day.png');
      }
      .icon-15day{
        @include bgImg(24px, 24px, '/imgs/icon-15day.png');
      }
      .icon-post{
        @include bgImg(24px, 24px, '/imgs/icon-post.png');
      }
      .icon-after{
        @include bgImg(24px, 24px, '/imgs/icon-loc.png');
      }
    }
  }
</style>