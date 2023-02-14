<template>
	<div class="table-row">
		<input class="input__table-entitled" type="text" name="product_name" v-model="item.name"
			placeholder="Banner Design" />
		<input class="input__table-qty" style="text-align: center; padding-block: 2px" type="number" v-model="item.qty"
			name="qty" placeholder="1" />
		<input type="number" class="input__table-price" name="price" v-model="item.price" placeholder="156.00" />
		<div style="display: flex; align-items: center; justify-content: center;" v-text="total + ' €'">
		</div>
		<button class="icon_delete" type="button" @click.prevent="$emit('delete')">
			<icon-delete></icon-delete>
		</button>
	</div>
</template>

<script>
import IconDelete from "Components/Icon/IconDelete.vue";
export default {
	name: "row-product",
	components: {
		IconDelete,
	},
	props: {
		item: {
			type: Object,
			required: true,
		}
	},
	computed: {
		total() {
			return this.item.qty * this.item.price;
		}
	},
	watch: {
		total(value) {
			this.$set(this.item, 'total', value);
		}
	}
}
</script>

<style scoped lang="scss">
.table-row {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 16px;
}

.table-row {
	grid-column: 1 / 6;
}

.input__table-entitled {
	width: 214px;
}

.input__table-qty {
	min-width: 50px;
}

.input__table-price {
	width: 100px;
}

.input__table-total {
	width: 56px;
}

.icon_delete {
	transition: all 0.3s ease;

	&:hover {
		color: var(--red);
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
</style>