<template>
  <NavbarLeft :show-nav-left="isHidden || posX < 1225" />
  <NavbarTop
    :show-nav-left="isHidden"
    @closeNavLeft="(n) => (isHidden = n)"
    @resizeWindow="(posx) => (posX = posx)"
  />
  <ProFile />
</template>

<script>
import NavbarTop from "./components/NavbarTop.vue";
import NavbarLeft from "./components/NavbarLeft.vue";
import ProFile from "./components/ProFile.vue";

export default {
  name: "App",
  components: {
    NavbarTop,
    NavbarLeft,
    ProFile,
  },
  data() {
    return {
      count: 1,
      isHidden: false,
      posX: window.innerWidth,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
