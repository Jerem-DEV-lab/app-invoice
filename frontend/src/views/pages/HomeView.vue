<template>
  <div>
    <section>
      <header>
        <div class="list_title">
          <h1 class="title">Factures</h1>
          {{ subtitle }}
        </div>
        <div class="list_action">
          <dropdown label="Filtrer" @click-dropdown="toggleDropdown" :state="stateDropdownFilter"
            data-label="par status" :onClose="onCloseDropdown">
            <div class="input-wrapper" v-for="(option, i) in filterOptions" :key="i">
              <input type="radio" v-model="filter" :value="option.value" name="filter" />
              <label :for="option.name">
                {{ option.label }}
              </label>
            </div>
          </dropdown>
          <button-icon @click="stateModalCreate = !stateModalCreate">
            <template slot="icon-start">
              <icon-add></icon-add>
            </template>
            <span data-label="Facture" class="dynamic-label">Nouvelle </span>
          </button-icon>
        </div>
      </header>
      <main :class="{ 'empty-invoice': filteredInvoices.length === 0 }">
        <empty-invoice v-if="filteredInvoices.length === 0"></empty-invoice>
        <list-invoices v-else-if="filteredInvoices.length" :invoices="filteredInvoices"></list-invoices>
      </main>
    </section>
    <modal-invoice @invoice-events="invoiceEvents" @close="stateModalCreate = !stateModalCreate"
      v-if="stateModalCreate" />
  </div>
</template>
<script>
import IconChevronDown from "Components/Icon/IconChevronDown.vue";
import ButtonIcon from "Components/Button/ButtonIcon.vue";
import IconAdd from "Components/Icon/IconAdd.vue";
import EmptyInvoice from "Components/EmptyInvoice.vue";
import ListInvoices from "Components/Invoices/ListInvoices.vue";
import ModalInvoice from "Components/Invoices/ModalInvoice.vue";
import Dropdown from "Components/Dropdown.vue";
import Data from "@/data.json";


export default {
  name: "home-view",
  components: {
    IconChevronDown,
    ButtonIcon,
    IconAdd,
    EmptyInvoice,
    ListInvoices,
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
      filterOptions: [
        { label: "Toutes", value: "", name: "all" },
        { label: "Brouillon", value: "draft", name: "draft" },
        { label: "En attente", value: "pending", name: "pending" },
        { label: "Payée", value: "paid", name: "paid" },
      ],
    };
  },
  computed: {
    subtitle() {
      return `Vous avez ${this.invoices.length} facture${this.invoices.length > 1 ? "s" : ""}`
    },
    filteredInvoices() {
      if (this.filter === '') return this.invoices;
      return this.invoices.filter((invoice) => invoice.status === this.filter);
    },
  },
  methods: {
    toggleDropdown() {
      this.stateDropdownFilter = !this.stateDropdownFilter;
    },
    onCloseDropdown() {
      this.stateDropdownFilter = false;
    },
    invoiceEvents(invoice, action) {
      this.invoices.push({ ...invoice, status: action });
      this.stateModalCreate = !this.stateModalCreate;
    },
    onCloseDropdown() {
      this.stateDropdownFilter = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "Styles/tools/function.scss";
@import "Styles/tools/mixins.scss";

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

.dynamic-label::after {
  content: attr(data-label);

  @include down(768) {
    content: none;
  }
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
