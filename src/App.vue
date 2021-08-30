<script>
// import './assets/tailwind.css';
import HeaderMenu from '@/components/HeaderMenu.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    HeaderMenu,
    Footer,
  },
  setup() {
    
  },
}
</script>


<template>
  <div class="flex justify-center items-center">
    <HeaderMenu />
  </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/checkout">Checkout</router-link>
  </div> -->
  <router-view/>
  <Footer />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");
#app {
  font-family: "Noto Sans TC", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-active {
  color: #42b983;
} */

</style>
