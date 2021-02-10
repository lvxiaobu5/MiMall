<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://github.com/KaYoczl" target="_blank">KaYoczl主页</a><span>|</span>
      <a href="https://github.com/KaYoczl/MiMall" target="_blank"><span class="domain">小米商城</span></a><span>|</span>
      <a href="https://github.com/KaYoczl/Travel" target="_blank">去哪儿网APP</a><span>|</span>
      <a href="https://github.com/KaYoczl/Movies" target="_blank">电影介绍网站</a>
    </div>
    <div class="copyright">© 2021 MiMall.com 粤ICP证110507号 粤ICP备10046444号 粤公网安备11010802020134号 粤网文[2021]0276-042号</div>
  </div>
</template>

<script>
export default {
  name:'nav-footer'
}
</script>

<style lang="scss" scoped>
  .footer{
    height: 234px;
    border-top: 4px solid #FF6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      a{
        color: #999999;
        display: inline-block;
        .domain{
          color: #FF6600;
        }
      }
      span{
        margin: 0 10px;
      }
      margin-bottom: 13px;
    }
  }
</style>