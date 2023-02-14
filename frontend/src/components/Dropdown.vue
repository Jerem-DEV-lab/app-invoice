<template>
  <div v-clickoutside="onClose">
    <div class="dropdown">
      <button @click="$emit('click-dropdown')" type="button">
        <span :data-label="dataLabel">{{ label }}</span>
        <icon-chevron-down></icon-chevron-down>
      </button>
      <div v-if="state" class="dropdown__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import IconChevronDown from "Components/Icon/IconChevronDown.vue";

export default {
  name: "dropdown",
  components: {
    IconChevronDown,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    dataLabel: {
      type: String,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
    state: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "Styles/tools/function.scss";
@import "Styles/tools/mixins.scss";

.dropdown {
  position: relative;
}

span::after {
  content: attr(data-label);
  margin-right: 16px;
}

@include down(768) {
  span::after {
    content: "";
  }
}

.dropdown__content {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 30px;
  left: 50%;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  transform: translateX(-50%);
  background-color: var(--input-background);
  padding: 24px;
  min-width: 192px;
  width: max-content;
  height: auto;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
}
</style>
