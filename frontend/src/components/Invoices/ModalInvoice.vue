<template>
  <div class="modal">
    <div class="overlay" @click="closeModal"></div>
    <div class="modal-content">
      <h2>Nouvelle facture</h2>
      <form ref="anyName">
        <div class="form-group">
          <span>Information de l'entreprise</span>
          <div class="input-wrapper">
            <label for="company_address">Address</label>
            <input
              type="text"
              placeholder="19 Union Terrace"
              autocomplete="off"
              name="company_address"
              v-model="newInvoice.senderAddress.street"
            />
          </div>
          <div class="input-wrapper-grid">
            <div class="input-wrapper">
              <label for="city">Ville</label>
              <input
                type="text"
                v-model="newInvoice.senderAddress.city"
                placeholder="Paris"
                name="city"
                autocomplete="off"
              />
            </div>
            <div class="input-wrapper">
              <label for="company_postal_code">Code postal</label>
              <input
                v-model="newInvoice.senderAddress.postCode"
                type="text"
                placeholder="75000"
                name="company_postal_code"
                autocomplete="off"
              />
            </div>
            <div class="input-wrapper">
              <label for="company_country">Pays</label>
              <input
                type="text"
                v-model="newInvoice.senderAddress.country"
                autocomplete="off"
                placeholder="France"
                name="company_country"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <span>Client</span>
          <div class="input-wrapper">
            <label for="clientName">Nom Prénom</label>
            <input
              type="text"
              v-model="newInvoice.clientName"
              placeholder="John Doe"
              autocomplete="off"
              name="clientName"
            />
          </div>
          <div class="input-wrapper">
            <label for="email">Email</label>
            <input
              v-model="newInvoice.clientEmail"
              type="text"
              placeholder="john@example.com"
              name="email"
              autocomplete="off"
            />
          </div>
          <div class="input-wrapper">
            <label for="client_address">Adresse</label>
            <input
              type="text"
              placeholder=""
              name="client_address"
              autocomplete="off"
              v-model="newInvoice.clientAddress.street"
            />
          </div>
          <div class="input-wrapper-grid" style="--columns: 3">
            <div class="input-wrapper">
              <label for="country">Ville</label>
              <input
                type="text"
                autocomplete="off"
                placeholder="Paris"
                name="country"
                v-model="newInvoice.clientAddress.city"
              />
            </div>
            <div class="input-wrapper">
              <label for="country">Code postal</label>
              <input
                type="text"
                autocomplete="off"
                placeholder="75000"
                name="country"
                v-model="newInvoice.clientAddress.postCode"
              />
            </div>
            <div class="input-wrapper">
              <label for="country">Pays</label>
              <input
                type="text"
                v-model="newInvoice.clientAddress.country"
                placeholder="France"
                name="country"
                autocomplete="off"
              />
            </div>
          </div>

          <div class="input-wrapper-grid" style="--columns: 2">
            <div class="input-wrapper">
              <label for="country">Date facturation</label>
              <input
                type="date"
                autocomplete="off"
                placeholder="02/02/2023"
                name="createdAt"
                v-model="newInvoice.createdAt"
              />
            </div>
            <div class="input-wrapper">
              <label for="country">Condition de paiement</label>
              <select-input
                :options="paymentTerms"
                @input="onSelectInput($event)"
              ></select-input>
            </div>
          </div>
        </div>
        <span>Liste des produits</span>
        <div class="table">
          <div class="header__table-entitled">Intitulé produit</div>
          <div class="header__table-qty">Qty</div>
          <div class="header__table-price">Prix</div>
          <div class="header__table-total">Total</div>
          <div class="table-row" v-for="(item, i) in newInvoice.items" :key="i">
            <input
              class="input__table-entitled"
              type="text"
              name="product_name"
              v-model="item.name"
              placeholder="Banner Design"
            />
            <input
              class="input__table-qty"
              style="text-align: center; padding-block: 2px"
              type="number"
              v-model="item.qty"
              name="qty"
              placeholder="1"
            />
            <input
              type="number"
              class="input__table-price"
              name="price"
              v-model="item.price"
              placeholder="156.00"
            />
            <div
              style="display: flex; align-items: center; justify-content: center;" v-text="item.total + ' €'">
            </div>
            <button
              class="icon_delete"
              type="button"
              @click.prevent="deleteRowProduct(i)"
            >
              <icon-delete></icon-delete>
            </button>
          </div>
        </div>
        <div v-if="newInvoice.items.length <= 0" class="empty-row">
          <p>Cliquer sur le bouton &#171; <pre>+Ajouter un produit</pre> &#187; pour ajouter une ligne.</p>
        </div>
        <button
          type="button"
          class="button__invoice-add"
          @click.prevent="addNewRowProduct"
        >
          + Ajouter un produit
        </button>
        <div class="modal__footer">
          <button type="button" class="button__cancel" @click.prevent="closeModal">Annuler</button>
          <div class="button__wrapper">
            <button type="button" class="button__save-draft">
              Sauvegarder le brouillon
            </button>
            <button type="button" class="button__create" @click="createInvoice">
              Créer la facture
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import IconDelete from "@/components/Icon/IconDelete.vue";
import SelectInput from "@/components/Input/SelectInput.vue";
import {modelInvoice} from "@/models/invoice.js";
import { generateID } from "@/utils/generateid";
const paymentTerms = [
  "Paiement à réception de facture",
  "Paiement à 30 jours",
  "Paiement à 60 jours",
  "Paiement à 90 jours",
];
export default {
  name: "ModalInvoice",
  components: {
    IconDelete,
    SelectInput,
  },
  props: {
    closeModal: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      newInvoice: modelInvoice(),
      paymentTerms,
      paymentTermsSelected: null,
    };
  },
  methods: {
    resetNewInvoice(){
      this.$refs.anyName.reset()
    },
    createInvoice(){
      this.newInvoice.status = "pending"
      this.$emit("createInvoice", this.newInvoice);
      this.closeModal()
    },
    deleteRowProduct(index) {
      this.newInvoice.items.splice(index, 1);
    },
    addNewRowProduct() {
      this.newInvoice.items.push({
        name: "",
        qty: 0,
        price: 0,
        total: 0,
      });
    },
    onSelectInput(value) {
      this.paymentTermsSelected = value;
      this.newInvoice.paymentTerms = value;
    },
  },
  mounted() {
    this.newInvoice.id = generateID();
    this.$nextTick(() => {
      this.$refs.anyName.reset();
    })
  },
  watch: {
    '$data.newInvoice.items': {
      handler(){
        console.log("handle")
        this.newInvoice.items.map((item) => {
        return item.total = parseFloat(item.qty) * parseFloat(item.price)
      });
      },
      deep: true
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/tools/function.scss";
@import "@/styles/tools/mixins.scss";
.modal-content {
  position: fixed;
  border-radius: 0 20px 20px 0;
  left: calc(var(--nav-width-lg) - 16px);
  top: 0;
  bottom: 0;
  width: 635px;
  background: white;
  z-index: 0;
  padding: 56px 56px 130px 56px;
  overflow-y: auto;
  @include dark() {
    background: var(--background);
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 48px;
  }
  .form-group > span {
    display: block;
    color: var(--purple);
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 24px;
  }
  span {
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    color: var(--grey);
    margin-bottom: 16px;
  }
}
.table,
.table-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;
}
.table .table-row {
  grid-column: 1 / 6;
}

.header__table-entitled,
.input__table-entitled {
  width: 214px;
}
.header__table-qty,
.input__table-qty {
  min-width: 50px;
}
.header__table-price,
.input__table-price {
  width: 100px;
}
.header__table-total {
  grid-column: 4 / 6;
}
.header__table-total,
.input__table-total {
  width: 56px;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  label {
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    color: var(--label);
    margin-bottom: 8px;
  }
  input:disabled {
    border-color: transparent;
    cursor: not-allowed;
    &::placeholder {
      color: var(--placeholder);
    }
  }
}

input {
  border: 1px solid var(--input-border);
  border-radius: 4px;
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  color: var(--typo-color);
  background: var(--input-background);
  &::placeholder {
    color: var(--placeholder);
  }
  &:focus {
    outline: none;
    border: 1px solid var(--purple);
  }
}
.input-wrapper-grid {
  --columns: 3;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 24px;
}
.overlay {
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
input {
  position: relative;
}
input[type="date"]::before {
  content: attr(placeholder);
  position: absolute;
  left: 16px;
  right: 40px;
  color: var(--typo-color);
  background: var(--input-background);
  white-space: pre;
}
input[type="date"]:disabled::before {
  cursor: not-allowed;
  color: var(--grey);
}
input[type="date"]:focus::before {
  content: "" !important;
}
.icon_delete {
  transition: all 0.3s ease;
  &:hover {
    color: var(--red);
  }
}

.button__invoice-add {
  background-color: #f9fafe;
  color: var(--grey);
  border: none;
  border-radius: 24px;
  margin-top: 18px;
  padding: 16px 24px;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.3s ease;
  @include dark() {
    background-color: var(--input-background);
    color: var(--grey);
    &:hover {
      color: white;
      background-color: var(--purple-hover);
    }
  }
  &:hover {
    color: white;
    background-color: var(--purple-hover);
  }
}
.modal__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  border-radius: 0 20px 0 0;
  background: white;
  left: var(--nav-width-lg);
  width: 602px;
  padding: 24px 56px;
  bottom: 0;
  box-shadow: 0px 49px 95px rgba(0, 0, 0, 0.5);
  .button__wrapper {
    display: flex;
    gap: 8px;
  }
  .button__cancel,
  .button__save-draft,
  .button__create {
    padding: 16px 24px;
    border-radius: 24px;
    color: var(--grey);
    line-height: 15px;
    font-weight: 500;
  }
  .button__cancel {
    background-color: var(--discard-bg);
  }
  .button__save-draft {
    background-color: var(--cancel-bg);
    color: var(--typo-color);
  }
  .button__create {
    background-color: var(--purple);
    color: white;
  }

  @include dark() {
    background: var(--background);
  }
}

.empty-row{
  margin-block: 24px 0;
  p{
    display: flex;
    align-items: center;
    pre{
      display:flex;
      background-color: #82838b;
      color: white;
      font-family: 'League Spartan', sans-serif;
      padding: 2px 8px;
      border-radius: 4px;
      margin-inline: 4px;
      @include dark() {
      background-color: var(--input-background);
      }
    }
  }
}
</style>
