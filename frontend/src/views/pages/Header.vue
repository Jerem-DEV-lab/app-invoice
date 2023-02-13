<template>

<header>
        <div class="list_title">
          <h1 class="title">Factures</h1>
          <span>
            Vous avez {{ invoices.length }} facture s
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
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			// Data
		}
	},
	methods: {
		// Methods
	},
	created() {
		// Created
	},
	mounted() {
		// Mounted
	}
}
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
</style>