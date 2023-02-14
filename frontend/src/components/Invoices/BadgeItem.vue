<template>
  <span class="badge__container">
    {{ status }}
  </span>
</template>

<script>
export default {
  name: "badge-item",
  props: {
    status: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'Styles/tools/function.scss';
@import 'Styles/tools/mixins.scss';
.badge__container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 104px;
  height: 40px;
  border-radius: 6px;
  text-transform: capitalize;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
  }
}
.paid {
  color: #33d69f;
  background-color: rgba(#33d69f, 0.06);
  &::before {
    background-color: #33d69f;
  }
}
.pending {
  color: #ff8f00;
  background-color: rgba(#ff8f00, 0.06);
  &::before {
    background-color: #ff8f00;
  }
}
.draft {
  color: #373B53;
  background-color: rgba(#F3F3F5, 1);
  &::before {
    background-color: #373B53;
  }
}
@include dark(){
  .draft {
  color: #f8f8fb;
  background-color: rgba(#f8f8fb, 0.06);
  &::before {
    background-color: #f8f8fb;
  }
}
}

</style>
