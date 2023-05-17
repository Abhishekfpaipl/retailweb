<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="position-relative">
    <top-nav class="position-fixed bg-white" style="top: 0px;z-index:11;"></top-nav>
    <router-view class=" w-100 position-absolute" style="top:80px"/>
    <bottom-nav class=" position-fixed w-100 bg-white" style="bottom: 0; z-index:1;"></bottom-nav>
  </div>
</template>
<script setup>
import BottomNav from './components/Navbar/BottomNav.vue';
import TopNav from './components/Navbar/TopNav.vue';


</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
