<template>
  <button @click="onClick ? onClick('checked') : null" type="button">
    <span class="icon" v-if="slotStart"><slot name="icon-start"></slot> </span
    >{{ label }}
    <span class="icon" v-if="slotEnd">
      <slot name="icon-end"></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "ButtonIcon",
  data: () => {
    return {
      slotEnd: false,
      slotStart: false,
    };
  },
  mounted() {
    this.checkSlot();
  },
  methods: {
    checkSlot() {
      this.slotEnd = !!this.$slots["icon-end"];
      this.slotStart = !!this.$slots["icon-start"];
    },
  },
  props: {
    onClick: {
      type: Function,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  background-color: var(--purple);
  border-radius: 48px;
  min-height: 48px;
  color: white;
  transition: ease-in-out 0.2s;
  &:hover {
    background-color: var(--purple-hover);
  }
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px !important;
  background-color: white;
  height: 32px;
  width: 32px;
  border-radius: 32px;
}
</style>
