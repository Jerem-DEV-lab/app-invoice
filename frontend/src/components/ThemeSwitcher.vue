<template>
  <div class="input_theme">
    <label for="theme">
      <icon-moon v-if="theme" />
      <icon-sun v-if="!theme" />
      <input
        id="theme"
        type="checkbox"
        v-on:change="changeTheme"
        v-model="theme"
      />
    </label>
  </div>
</template>

<script>
import IconMoon from "./Icon/IconMoon.vue";
import IconSun from "./Icon/IconSun.vue";
const defaultTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.body.classList.add("theme-dark");
    return true;
  } else {
    document.body.classList.add("theme-light");
    return false;
  }
};
export default {
  name: "ThemeSwitcher",
  components: {
    IconMoon,
    IconSun,
  },
  data() {
    return {
      theme: defaultTheme(true),
    };
  },
  methods: {
    changeTheme(e) {
      if (e.target.checked) {
        document.body.classList.remove("theme-light");
        document.body.classList.add("theme-dark");
      } else {
        document.body.classList.add("theme-light");
        document.body.classList.remove("theme-dark");
      }
    },
  },
};
</script>
<style scoped lang="scss">
.input_theme {
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    display: none;
  }
  label {
    cursor: pointer;
    transition: color ease-in .3s;
    color: var(--grey);
    &:hover {
      color: var(--white);
    }
  }
}
</style>
