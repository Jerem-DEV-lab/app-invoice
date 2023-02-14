<template>
    <ul>
        <item v-for="invoice in invoices" :key="invoice.id" :invoice="invoice"></item>
    </ul>
</template>

<script>
import Item from "Components/Invoices/Item.vue"
export default {
    name: "list-invoices",
    components: {
        Item
    },
    props: {
        invoices: {
            type: Array,
            required: true,
        },
    },
}
</script>