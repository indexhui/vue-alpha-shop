<template>
  <div class="home">
    <div >
      <router-link to="/address"> address </router-link>
      <router-link to="/delivery"> delivery </router-link>
      <router-link to="/payment"> payment </router-link>
    </div>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
a.router-link-active {
 color: green;
}
</style>