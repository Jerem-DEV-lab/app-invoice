<template>
    <div>
        <ul>
            <invoice-item v-for="invoice in invoices" :key="invoice.id" :invoice="invoice"></invoice-item>
        </ul>
    </div>
</template>

<script>
import InvoiceItem from "Components/Invoices/InvoiceItem.vue"
export default{
    name: "ListInvoices",
    components: {
        InvoiceItem
    },
    props: {
        invoices: {
            type: Array,
            required: true,
        },
    },
}
</script>