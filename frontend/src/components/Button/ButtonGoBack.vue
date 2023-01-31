<template>
  <button @click="goBack" type="button" class="button_back">
    <icon-arrow-left></icon-arrow-left>
    {{ buttonLabel }}
  </button>
</template>
<script>
import IconArrowLeft from '@/components/Icon/IconArrowLeft.vue';
export default {
  name: "ButtonGoBack",
  components: {
    IconArrowLeft
  },
  props: {
    buttonLabel: {
      type: String,
      default: "Go back",
      required: false,
    },
  },
  methods: {
    goBack() {
      return this.$router.back();
    },
  },
};
</script>
