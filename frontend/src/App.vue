<template>
  <wrapper-app>
    <router-view></router-view>
  </wrapper-app>
</template>
<script>
import WrapperApp from "Components/WrapperApp.vue";
export default {
  name: "app",
  components: {
    WrapperApp,
  },
};
</script>
