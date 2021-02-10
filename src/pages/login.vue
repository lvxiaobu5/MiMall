<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://github.com/KaYoczl" target="_blank">KaYoczl主页</a><span>|</span>
        <a href="https://github.com/KaYoczl/MiMall" target="_blank"><span class="domain">小米商城</span></a><span>|</span>
        <a href="https://github.com/KaYoczl/Travel" target="_blank">去哪儿网APP</a><span>|</span>
        <a href="https://github.com/KaYoczl/Movies" target="_blank">电影介绍网站</a>
      </div>
      <p class="copyright">前端吕小布版权所有-粤ICP备10046444-<span><img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"></span>粤公网安备11010802020134号-粤ICP证110507号</p>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'login',
  data(){
    return {
      username:'',
      password:'',
      userId:''
    }
  },
  methods:{
    login(){
      let { username,password } = this; //ES6的解构，把对象解构出来，解出来之后就包括了这两个变量
      this.axios.post('/user/login',{
        username,
        password
      }).then((res)=>{
        this.$cookie.set('userId',res.id,{expires:'Session'});
        // this.$store.dispatch('saveUserName',res.username);
        // this.saveUserName(res.username);
        // this.$router.push({
        //   name:'index',
        //   params:{
        //     from:'login'
        //   }
        // });
        // to-do 保存用户名
        this.$router.push('/index');
      })
    },
    ...mapActions(['saveUserName']),
    register(){
      this.axios.post('/user/register',{
        username:'KaYo',
        password:'1234',
        email:'KaYo@163.com'
      }).then(()=>{
        // this.$message.success('注册成功');
        alert('注册成功');
      })
    }
  }
}
</script>
<style lang="scss">
.login{
  &>.container{
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:0;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#757575;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#757575;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>