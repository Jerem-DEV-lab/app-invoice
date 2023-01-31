<template>
  <wrapper-app>
    <router-view></router-view>
  </wrapper-app>
</template>
<script>
import WrapperApp from "./components/WrapperApp.vue";
import ButtonGoBack from "@/components/Button/ButtonGoBack.vue";
export default {
  name: "App",
  components: {
    ButtonGoBack,
    WrapperApp,
  },
};
</script>

<style src="@/styles/app.scss" lang="scss"></style>
