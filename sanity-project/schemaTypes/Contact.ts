export default {
    name: 'contact',
    type: 'document',
    title: 'Messages',
    fields: [
        {
            name: "customerName",
            type: "string",
            title: "Customer Name",
        },
        {
            name: "customerEmail",
            type: "string",
            title: "Customer Email",
        },
        {
            name: "messageSubject",
            type: "string",
            title: "Customer Subject",
        },
        {
            name: "customerMessage",
            type: "string",
            title: "Customer Message",
        },
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