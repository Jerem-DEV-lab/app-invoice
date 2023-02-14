<template>
  <div class="content">
    <img src="Assets/illustration-empty.svg" />
    <div>
      <h2>Aucune facture pour le moment.</h2>
      <p>
        Créer une facture en cliquant sur le bouton
        <strong>Nouvelle facture</strong> et commencer à enregistrer vos
        factures.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "empty-invoice",
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  text-align: center;
  h2 {
    font-size: 20px;
    font-weight: 700;
    color: var(--dark-grey);
    margin-bottom: 24px;
  }
  p {
    color: var(--grey);
    margin: auto;
    font-size: 14px;
    line-height: 20px;
    max-width: 310px;
  }
}
</style>
