<template>
  <div>
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
          <dropdown
            :label="labelButtonFilter"
            :onOpen="actionDropdownFilter"
            :onClose="() => (stateDropdownFilter = false)"
            :state="stateDropdownFilter"
          >
            <div class="input-wrapper">
              <input
                type="radio"
                id="all"
                v-model="filter"
                value=""
                name="filter"
              />
              <label for="all">Toutes</label>
            </div>
            <div class="input-wrapper">
              <input
                type="radio"
                id="draft"
                v-model="filter"
                value="draft"
                name="filter"
              />
              <label for="draft">Brouillon</label>
            </div>
            <div class="input-wrapper">
              <input
                type="radio"
                id="pending"
                v-model="filter"
                name="filter"
                value="pending"
              />
              <label for="pending">En attente</label>
            </div>
            <div class="input-wrapper">
              <input
                type="radio"
                id="paid"
                v-model="filter"
                name="filter"
                value="paid"
              />
              <label for="paid">Payée</label>
            </div>
          </dropdown>
          <button-icon :label="labelButtonNewInvoice" :onClick="openModal">
            <template slot="icon-start">
              <icon-add></icon-add>
            </template>
          </button-icon>
        </div>
      </header>
      <main :class="[filteredInvoices.length === 0 && 'empty-invoice']">
        <empty-invoice v-if="filteredInvoices.length === 0"></empty-invoice>
        <list-invoices
          v-else-if="filteredInvoices.length > 0"
          :invoices="filteredInvoices"
        ></list-invoices>
      </main>
    </section>
    <transition name="slide">
      <modal-invoice
        @createInvoice="onCreatedInvoice($event)"
        v-if="stateModalCreate"
        :closeModal="closeModal"
      ></modal-invoice>
    </transition>
  </div>
</template>
<script>
import ButtonGoBack from "@/components/Button/ButtonGoBack.vue";
import IconChevronDown from "@/components/Icon/IconChevronDown.vue";
import ButtonIcon from "@/components/Button/ButtonIcon.vue";
import IconAdd from "@/components/Icon/IconAdd.vue";
import EmptyInvoice from "@/components/EmptyInvoice.vue";
import ListInvoices from "@/components/Invoices/ListInvoices.vue";
import ModalInvoice from "@/components/Invoices/ModalInvoice.vue";
import Dropdown from "@/components/Dropdown.vue";
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
    ModalInvoice,
    Dropdown,
  },
  data() {
    return {
      labelButtonFilter: "Filtrer par status",
      labelButtonNewInvoice: "Nouvelle facture",
      invoices: Data,
      stateModalCreate: false,
      stateDropdownFilter: false,
      filter: "",
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
    onCreatedInvoice(invoice) {
      return this.invoices.push(invoice);
    },
    getWindowWidth() {
      if (window.innerWidth > 768) {
        this.labelButtonFilter = "Filtrer par status";
        this.labelButtonNewInvoice = "Nouvelle facture";
      } else {
        this.labelButtonFilter = "Filtrer";
        this.labelButtonNewInvoice = "Nouveau";
      }
    },
    actionDropdownFilter() {
      this.stateDropdownFilter = !this.stateDropdownFilter;
      return this.stateDropdownFilter;
    },
    onCloseDropdwon() {
      return (this.stateDropdownFilter = false);
    },
    openModal() {
      return (this.stateModalCreate = true);
    },
    closeModal() {
      return (this.stateModalCreate = false);
    },
  },
  computed: {
    filteredInvoices() {
      this.stateDropdownFilter = false;
      if (this.filter === "draft") {
        return this.invoices.filter((invoice) => invoice.status === "draft");
      } else if (this.filter === "pending") {
        return this.invoices.filter((invoice) => invoice.status === "pending");
      } else if (this.filter === "paid") {
        return this.invoices.filter((invoice) => invoice.status === "paid");
      } else {
        return this.invoices;
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
.input-wrapper {
  display: flex;
  align-items: center;
  gap: 13px;
  line-height: 0;
}
@media screen and (max-width: 767px) {
  .list_action {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>
