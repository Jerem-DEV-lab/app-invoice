<template>
  <li class="row__invoice-item">
    <span class="id__invoice">
      <span style="color: var(--grey); font-weight: 700">#</span
      >{{ invoice.id }}
    </span>
    <span class="date__invoice">
      {{ invoice.createdAt | formatDate }}
    </span>
    <span class="clientName__invoice">
      {{ invoice.clientName }}
    </span>
    <span class="price__invoice"> {{ invoice.total | toFixedPrice }}€</span>
    <badge-item :status="invoice.status" :class="[invoice.status]"></badge-item>
    <button type="button" class="icon__invoice">
      <icon-arrow-right />
    </button>
  </li>
</template>

<script>
import IconArrowRight from "../Icon/IconArrowRight.vue";
import BadgeItem from "@/components/Invoices/BadgeItem.vue";
import { Fragment } from "vue-fragment";
export default {
  name: "invoice-item",
  components: {
    Fragment,
    IconArrowRight,
    BadgeItem,
  },
  filters: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("fr-FR", options);
    },
    toFixedPrice(value) {
      if (value) {
        return parseFloat(value).toFixed(2);
      }
    },
  },
  props: {
    invoice: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/tools/function.scss";
@import "@/styles/tools/mixins.scss";
.row__invoice-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  background-color: var(--item-invoice);
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  padding: 28px 24px 28px 32px;
  margin-bottom: 16px;
  border: solid 1px transparent;
  transition: border-color 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    border-color: var(--purple);
  }
  &:last-of-type {
    margin-bottom: 20px;
  }
  :nth-child(1) {
    width: 60px;
  }
  :nth-child(2) {
    width: 110px;
  }
  :nth-child(3) {
    width: 90px;
  }
  :nth-child(4) {
    width: 90px;
  }
  :nth-child(5) {
    max-width: 105px;
  }
  :nth-child(6) {
    max-width: 5px;
  }
  .id__invoice {
    font-weight: 700;
  }
  .date__invoice {
    font-weight: 400;
    color: var(--grey);
  }
  .clientName__invoice {
    font-weight: 400;
    color: var(--grey);
    @include dark() {
      color: #ffffff;
    }
  }
  .price__invoice {
    font-weight: 700;
  }
  .icon__invoice {
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.3);
    }
  }
}
@include down(620) {
  .row__invoice-item {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    font-size: 12px;
    .id__invoice {
      width: auto;
      grid-column: 1/2;
    }
    .date__invoice {
      width: auto;
      grid-column: 1/2;
      grid-row: 2/3;
      margin-top: 14px;
    }
    .clientName__invoice {
      width: auto;
      grid-column: 2/3;
      text-align: right;
    }

    .price__invoice {
      width: auto;
      font-size: 16px;
      grid-column: 1/2;
      line-height: 24px;
    }
    .icon__invoice {
      display: none;
    }
    .badge__container {
      align-self: flex-end;
      margin-left: auto;
      grid-column: 2/3;
      grid-row: 2/4;
    }
  }
}
</style>
