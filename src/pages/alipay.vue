<template>
  <div class="ali-pay">
    <order-header title="支付宝支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话</span>
      </template>
    </order-header>
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import Loading from './../components/Loading'
export default {
  name:'ali-pay',
  components:{
    OrderHeader,
    Loading,
  },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content:'',
      loading:true
    }
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit(){
      this.axios.post('/pay',{
        orderId:this.orderId,
        orderName:'Vue高仿小米商城',
        amount:0.01,    //单位元
        payType:1       //1、支付宝 2、微信
      }).then((res)=>{
        this.content = res.content;
        setTimeout(()=>{
          document.forms[0].submit();
        },100)
      })
    }
  },
}
</script>