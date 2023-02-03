import { generateID } from "@/utils/generateid";
export const modelInvoice = () => {
    return {
        id: generateID(),
        paymentTerms: "",
        paymentDue: "",
        clientName: "",
        clientEmail: "",
        status: "",
        createdAt: "",
        senderAddress: {
            street: "",
            city: "",
            postCode: "",
            country: "",
        },
        clientAddress: {
            street: "",
            city: "",
            postCode: "",
            country: "",
        },
        items: [],
        total: "",
    };
}