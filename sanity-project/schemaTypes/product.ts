export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: "productName",
            type: "string",
            title: "Product Name",
            description: "Enter Product name",
        },
        {
            name:"image",
            type:"image",
            title:"Product Image",
            description:"upload product image",
            options: {
                hotspot:true
            }
        },

        {
            name: "price",
            type: "number",
            title: "Price",
            description: "Enter actual price of product"
        },

        {
            name: "discount",
            type: "number",
            title: " Enter discount (in numbers not percentage)",
        },

        {
            name: "shortDescription",
            type: "string",
            title: "Enter short description",
            description: `Like "sleek and comfortable sofa " `
        },

        {
            name: "longDescription",
            type: "array",
            of: [{ type: "block" }],
            title: "Enter detailed description for product",
        },

        {
            name: "quantityAvailable",
            type: "number",
            title: "Enter quantity",
            description: " how many "
        },

        {
            name: "ratings",
            type: "number",
            title: "Enter ratings",
            description: "Enter ratings between 1 to 5",
        },

        {
            name: "ratingsInCount",
            type: "number",
            title: "Enter ratings count",
            description: "How many people had fully rated your products",
        },


        {
            name: "tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Featured", value: "Featured" },
                    { title: "New collections", value: "New Collections" },
                    { title: "Top rated", value: "Top rated" }
                ],
                layout: "grid",
            },
            title: "Enter tags",
            description: "Enter tags so that it can be shown on it's respective section in product catalog"
        },

        {
            name: 'category',
            type: 'string',
            options: {
                list: ['Sofas', 'Chairs'],
                layout: 'radio',
            },
        },
        {
            name:"weight",
            type:"string",
            title:"Product Weight",
            description:"Enter weight of product in kgs"
        }
    ]
};
/*
{
"_id":"-----",
"productName":"--",
"price":0,
"discount":0,
"shortDescription":"---",
"longDescription":"----",
"quantityAvailable":0,
"ratings":0,
"ratingsInCount":0,

"images": {
asset:
}
},

"tags":["Featured", ""],
"category":"sofas"
 */






///https://medium.com/@dumbnumb1995/creating-a-multi-select-field-in-a-sanity-schema-9d53e42e0bab#:~:text=To%20set%20up%20the%20checkboxes,when%20a%20checkbox%20is%20selected.