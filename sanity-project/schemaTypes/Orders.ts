export default {
    name: "order",
    type: "document",
    title: "orders",
    fields: [
        {
            name: "shippingInfo",
            type: "object",
            title: "Shippment Information",
            fields: [
                {
                    name: "fullName",
                    type: "string",
                    title: "Customer name",
                },
                {
                    name: "country",
                    type: "string",
                    title: "Country",
                },
                {
                    name: "province",
                    type: "string",
                    title: "province",
                },
                {
                    name: "city",
                    type: "string",
                    title: "City",
                },
                {
                    name: "postalCode",
                    type: "string",
                    title: "Postal Code",
                },
                {
                    name: "completeAddress",
                    type: "string",
                    title: "Address",
                },
                {
                    name: "phoneNumber",
                    type: "string",
                    title: "Phonenumber",
                },
                {
                    name: "email",
                    type: "string",
                    title: "Email",
                },
            ]
        },
        {
            name: "paymentInfo",
            title: "Payment Information",
            type: "object",
            fields: [
                {
                    name: "cardHolderName",
                    type: "string",
                    title: "Card Holder's Name"
                },
                {
                    name: "accountNumber",
                    type: "string",
                    title: "Account Number"
                },
                {
                    name: "cardNumber",
                    type: "string",
                    title: "Card Number"
                },
                {
                    name: "expirationDate",
                    type: "string",
                    title: "Card Expires On"
                },
                {
                    name: "CVV",
                    type: "string",
                    title: "Card Verification Value / Card Verification Code",
                },
                {
                    name: "amountPayable",
                    type: "string",
                    title: "Amount Payable In USDT",
                },
                {
                    name: "description",
                    type: "string",
                    title: "Order Description",
                },
                {
                    name: "orderStatus",
                    type: "string",
                    title: "Order status",
                    options: {
                        list: ["Completed Successfully", "Rejected", "Processing", "Delivered"],
                        layout: "radio"
                    }
                }
            ]
        },
        {
            name: "packages",
            type: "object",
            title: "Packages",
            fields: [
                {
                    name: "products",
                    type: "array",
                    of: [{
                        type: "object",
                        name: "product",
                        title: "Product Name",
                        fields: [
                            {
                                name: "productName",
                                type: "string",
                                title: "Product name",
                            },
                            {
                                name: "productId",
                                type: "string",
                                title: "Product Id",
                            },
                            {
                                name: "productQuantityRequired",
                                type: "number",
                                title: "Quantity"
                            }

                        ]
                    }]
                }
            ]
        }

        /* Run this querry to get products: */
        /*
                   *[_type == "order"] {
           _id,
         paymentInfo,
         shippingInfo,
         packages,
          }
         */

        /* After that add the following properties to all the fields */
        /*     readOnly:true,
            initialValue:"Muhammad affan" */
    ]
}