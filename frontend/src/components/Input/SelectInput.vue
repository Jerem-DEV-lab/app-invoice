<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div
      class="selected"
      @click="open = !open"
      :title="selected"
      :class="{ open: open }"
    >
      <span class="selected__option"> {{ selected }}</span>
    </div>
    <transition name="slide">
      <div class="select-options scroll" v-if="open">
        <div
          v-for="(option, i) of options"
          :key="i"
          :title="option"
          class="select__option"
          @click="
            selected = option;
            open = false;
            $emit('input', option);
          "
        >
          {{ option }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  props: {
    options: {
      type: Array,
      required: true,
    },
    defaultSelected: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.defaultSelected ? this.defaultSelected : this.options[0],
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  background-color: var(--input-background);
  color: var(--typo-color);
}
.selected__option {
  display: block;
  max-width: 90%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: transform 0.4s ease-in-out;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    background-image: url("../../assets/icon-arrow-down.svg");
    height: 12px;
    width: 12px;
    background-repeat: no-repeat;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.4s ease-in-out, margin-top 0.4s ease-in-out;
  }
  .open &::after {
    margin-top: -4px;
    transform: translateY(-50%) rotate(180deg);
  }
}
.select-options {
  position: absolute;
  transform-origin: top;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  max-height: 203px;
  overflow-y: auto;
  border-radius: 4px;
  z-index: 1;
}
.select__option {
  padding: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: var(--input-background);
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: var(--purple);
  }
}
.custom-select .selected {
  background-color: var(--input-background);
  border: 1px solid var(--input-border);
  border-radius: 4px;
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  color: var(--typo-color);
  cursor: pointer;
  user-select: none;
}
</style>
