<template>
  <div class="logo">
    <icon-logo />
  </div>
</template>

<script>
import IconLogo from "@/components/Icon/IconLogo.vue";
export default {
  name: "Logo",
  components: {
    IconLogo,
  },
};
</script>
<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 103px;
  height: 103px;
  overflow: hidden;
  z-index: 1;
}
.logo::before {
  content: "";
  z-index: -1;
  top: 0;
  left: 0;
  position: absolute;
  height: 103px;
  width: 103px;
  display: block;
  background-color: var(--purple);
  border-radius: 0 20px 20px 0;
}
.logo::after {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: 0;
  height: 50px;
  width: 103px;
  display: block;
  background-color: var(--light-purple);
  border-radius: 20px 0 20px 20px;
}
 @media screen and (max-width: 1024px) {
  .logo {
    width: 80px;
    height: 80px;
  }
  .logo::before {
    height: 80px;
    width: 80px;
  }
  .logo::after {
    width: 80px;
  }
 }
</style>
