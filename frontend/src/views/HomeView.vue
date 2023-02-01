<template>
  <section>
    <header>
      <div class="list_title">
        <h1 class="title">Factures</h1>
        <span>
          Vous avez {{ invoices.length }} facture<fragment
            v-if="invoices.length > 1"
            >s
          </fragment>
        </span>
      </div>
      <div class="list_action">
        <button>
          {{ labelButtonFilter }}
          <icon-chevron-down></icon-chevron-down>
        </button>
        <button-icon :label="labelButtonNewInvoice">
          <template slot="icon-start">
            <icon-add></icon-add>
          </template>
        </button-icon>
      </div>
    </header>
    <main :class="[invoices.length === 0 && 'empty-invoice']">
      <empty-invoice v-if="invoices.length === 0"></empty-invoice>
      <list-invoices
        v-else-if="invoices.length > 0"
        :invoices="invoices"
      ></list-invoices>
    </main>
  </section>
</template>
<script>
import ButtonGoBack from "@/components/Button/ButtonGoBack.vue";
import IconChevronDown from "@/components/Icon/IconChevronDown.vue";
import ButtonIcon from "@/components/Button/ButtonIcon.vue";
import IconAdd from "@/components/Icon/IconAdd.vue";
import EmptyInvoice from "@/components/EmptyInvoice.vue";
import ListInvoices from "@/components/Invoices/ListInvoices.vue";
import { Fragment } from "vue-fragment";
import Data from "@/data.json";
export default {
  name: "HomeView",
  components: {
    ButtonGoBack,
    IconChevronDown,
    ButtonIcon,
    IconAdd,
    EmptyInvoice,
    ListInvoices,
    Fragment,
  },
  data() {
    return {
      labelButtonFilter: "Filtrer par status",
      labelButtonNewInvoice: "Nouvelle facture",
      invoices: Data,
    };
  },
  mounted() {
    if (window.innerWidth > 768) {
      this.labelButtonFilter = "Filtrer par status";
      this.labelButtonNewInvoice = "Nouvelle facture";
    } else {
      this.labelButtonFilter = "Filtrer";
      this.labelButtonNewInvoice = "Nouveau";
    }
    window.addEventListener("resize", this.getWindowWidth);
  },
  unmounted() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
  methods: {
    getWindowWidth() {
      if (window.innerWidth > 768) {
        this.labelButtonFilter = "Filtrer par status";
        this.labelButtonNewInvoice = "Nouvelle facture";
      } else {
        this.labelButtonFilter = "Filtrer";
        this.labelButtonNewInvoice = "Nouveau";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 24px;
}
.list_title span {
  font-size: 12px;
  color: var(--grey);
  letter-spacing: -0.25px;
  line-height: 15px;
  font-weight: 500;
}
.list_action {
  display: flex;
  align-items: center;
  gap: 40px;
}
button {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  font-weight: bold;
}

.main-content {
  height: calc(100vh - 230px);
  &.empty-invoice {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media screen and (max-width: 767px) {
  .list_action {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>
