<template>
  <div class="product">
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <div class="h">123</div><div class="h">123</div><div class="h">123</div><div class="h">123</div><div class="h">123</div><div class="h">123</div><div class="h">123</div>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam'
export default {
  components: {
    ProductParam
  },
  name:'product'
}
</script>
<style lang="scss">
  .product{
    button{
      margin-left: 10px;
    }
    .h{
      height: 500px;
      background-color: green;
    }
  }
</style>