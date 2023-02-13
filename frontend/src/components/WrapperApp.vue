<template>
  <div>
    <div class="aside_nav">
      <logo />
      <div class="footer__aside_nav">
        <theme-switcher />
        <div class="avatar__aside_nav">
          <img
            height="40px"
            width="40px"
            src="Assets/image-avatar.jpg"
            alt="avatar"
          />
        </div>
      </div>
    </div>
    <main class="main_content">
      <div class="container">
        <slot />
      </div>
    </main>
  </div>
</template>
<script>
import IconLogo from "Components/Icon/IconLogo.vue";
import Logo from "Components/Logo.vue";
import ThemeSwitcher from "Components/ThemeSwitcher.vue";

export default {
  name: "wrapper-app",
  components: {
    IconLogo,
    Logo,
    ThemeSwitcher,
  },
};
</script>
<style scoped lang="scss">
.aside_nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--background-nav);
  height: 100%;
  width: var(--nav-width-lg);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  padding-bottom: 24px;
  border-top-right-radius: 20px;
}
.main_content {
  height: 100vh;
  max-height: 100%;
  overflow-y: auto;
  padding-bottom: 54px;
}
.container {
  max-width: 730px;
  margin: 0 auto;
  padding-top: 64px;
}
.footer__aside_nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 113px;
  .avatar__aside_nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 24px;
    margin-top: 24px;
    border-top: solid 1px var(--grey);
    img {
      border-radius: 50%;
    }
  }
}
@media screen and (max-width: 1024px) {
  .aside_nav {
    position: relative;
    flex-direction: row;
    height: 72px;
    width: 100vw;
    border-radius: 0;
    overflow: hidden;
    align-items: center;
    padding-bottom: 0;
  }
  .footer__aside_nav {
    height: 100%;
    flex-direction: row;
    width: auto;
    gap: 24px;
    .avatar__aside_nav {
      margin: 0;
      padding: 0;
      align-items: center;
      width: 80px;
      border-top: 0;
      border-left: solid 1px var(--grey);
    }
  }

  .container {
    max-width: 730px;
    margin: 0 auto;
    padding: 32px 24px 0;
  }
}
// @media screen and (min-width: 768px) and (max-width: 1024px) {
//   .container{
//     margin-left: calc(var(--nav-width-lg) + 24px);
//   }
// }
</style>
