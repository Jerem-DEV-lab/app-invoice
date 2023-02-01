<template>
  <div class="modal">
    <div class="overlay" @click="closeModal"></div>
    <div class="modal-content">
      <h2>Nouvelle facture</h2>
      <form>
        <div class="form-group">
          <span>Information de l'entreprise</span>
          <div class="input-wrapper">
            <label for="company_address">Address</label>
            <input
              type="text"
              placeholder="19 Union Terrace"
              autocomplete="off"
              name="company_address"
              
            />
          </div>
          <div class="input-wrapper-grid">
            <div class="input-wrapper">
              <label for="city">Ville</label>
              <input
                type="text"
                placeholder="Paris"
                name="city"
                autocomplete="off"
                
              />
            </div>
            <div class="input-wrapper">
              <label for="company_postal_code">Code postal</label>
              <input
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
              placeholder="John Doe"
              autocomplete="off"
              name="clientName"
              
            />
          </div>
          <div class="input-wrapper">
            <label for="email">Email</label>
            <input
              type="text"
              placeholder="john@example.com"
              name="email"
              autocomplete="off"
              
            />
          </div>
          <div class="input-wrapper">
            <label for="postal_code">Code postal</label>
            <input
              type="text"
              placeholder="75000"
              name="postal_code"
              autocomplete="off"
              
            />
          </div>
          <div class="input-wrapper">
            <label for="country">Pays</label>
            <input
              type="text"
              autocomplete="off"
              placeholder="France"
              name="country"
              
            />
          </div>
          <div class="input-wrapper-grid" style="--columns: 2">
            <div class="input-wrapper">
              <label for="city">Date Facture</label>
              <input
                type="date"
                placeholder="01 Fev 2023"
                disabled
                name="city"
                autocomplete="off"
                
              />
            </div>
            <div class="input-wrapper">
              <label for="postal_code">Code postal</label>
              <input
                type="text"
                placeholder="75000"
                name="postal_code"
                autocomplete="off"
                
              />
            </div>
          </div>
        </div>
        <span>Liste des produits</span>
        <div class="table">
          <div class="header__table-entitled">Intitulé produit</div>
          <div class="header__table-qty">Qty</div>
          <div class="header__table-price">Prix</div>
          <div class="header__table-total">Total</div>
          <div class="table-row">
            <input
              class="input__table-entitled"
              type="text"
              name="product_name"
              placeholder="Banner Design"
            />
            <input
              class="input__table-qty"
              style="text-align: center; padding-block: 2px"
              type="text"
              name="qty"
              placeholder="1"
            />
            <input
              type="text"
              class="input__table-price"
              name="price"
              placeholder="156.00"
            />
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              0
            </div>
            <button class="icon_delete" type="button">
              <icon-delete></icon-delete>
            </button>
          </div>
          <div class="table-row">
            <input
              class="input__table-entitled"
              type="text"
              name="product_name"
              placeholder="Banner Design"
            />
            <input
              class="input__table-qty"
              style="text-align: center; padding-block: 2px"
              type="text"
              name="qty"
              placeholder="1"
            />
            <input
              type="text"
              class="input__table-price"
              name="price"
              placeholder="156.00"
            />
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              0
            </div>
            <button class="icon_delete" type="button">
              <icon-delete></icon-delete>
            </button>
          </div>
        </div>
        <button type="button" class="button__invoice-add">
          + Ajouter un produit
        </button>
        <div class="modal__footer">
          <button class="button__cancel">Annuler</button>
          <div class="button__wrapper">
            <button class="button__save-draft">Sauvegarder le brouillon</button>
            <button class="button__create">Créer la facture</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import IconDelete from "../Icon/IconDelete.vue";
export default {
  name: "ModalInvoice",
  components: {
    IconDelete,
  },
  props:{
    closeModal: {
      type: Function,
      required: true
    }
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
    color: #dfe3fa;
    margin-bottom: 8px;
  }
  input:disabled {
    border-color: transparent;
    cursor: not-allowed;
    &::placeholder {
      color: var(--grey);
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
    color: var(--grey);
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
  color: red;
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

  @include dark(){
    background: var(--background);
  }
}
</style>
