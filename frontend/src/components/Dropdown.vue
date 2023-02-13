<template>
  <div v-clickoutside="onClose">
    <div class="dropdown">
      <button @click="onOpen" type="button">
        {{ label }}
        <icon-chevron-down></icon-chevron-down>
      </button>
      <div v-if="state" class="dropdown__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import IconChevronDown from "Components/Icon/IconChevronDown.vue";

export default {
  name: "Dropdown",
  components: {
    IconChevronDown,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    onOpen: {
      type: Function,
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
.dropdown {
  position: relative;
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
