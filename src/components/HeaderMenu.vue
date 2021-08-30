<script>
export default {

}
</script>

<template>
  <div class="md:w-full lg:w-1040 flex justify-center items-center justify-between py-2">
    <div class="w-1/3 space-x-2 flex justify-start	">
      <a href="">男款</a>
      <a href="">女款</a>
      <a href="">最新消息</a>
      <a href="">客製商品</a>
      <router-link to="/about">關於我們</router-link>
    </div>
    <div class="w-1/3 flex justify-center">
      <router-link to="/">
        <img src="../assets/logo.svg" alt="">
      </router-link>
    </div>
    <div class="flex w-1/3 space-x-3 justify-end">
      <div><img src="../assets/icon_search.svg" alt=""></div>
      <router-link to="/checkout">
        <img src="../assets/icon_cart.svg" alt="">
      </router-link>
      <div><img src="../assets/icon_mode_dark.svg" alt=""></div>
    </div>
  </div>
</template>

<style>

</style>