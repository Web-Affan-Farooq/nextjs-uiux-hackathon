## UI ux hackathon nextjs project:

This is the project I've created for UI ux hackathon organized by Sir Ameen Alam in GIAIC


## Updates:
1. Focus on creating more better cart showcase
2. Create robust responsiveness 
3. Create checkout page (https://dribbble.com/shots/24569129-Shopping-Cart-Bag-UI-Roblox-Trading-Skins-Platform-plstrade)
4. Create product page that is similar to reference
4. Implement like product functionality
5. Create page for create account (optional)
6. Create page for login (optional)


Create this
https://dribbble.com/shots/11486175-Luxury-Pens-E-commerce-Store-Concept


    // Error specification: check the cart context file that contains an error , adjust the explicit type annotations such that the type of the cart should be array then consider adding products

    #029FAE

Current data schema of custom api
```json 
        {
        "id": 1,
        "product_name": "Modern Leather Dining Chair",
        "price": 129.99,
        "ratings": 4.5,
        "ratings_in_count": 150,
        "quantity_available": 50,
        "short_description": "Sleek design, durable leather",
        "long_description": "Comfortable seating, easy to clean, perfect for modern dining rooms.",
        "image": "/stock/1.jpg"
    },
```

Schama of incoming data:

```json 
  {
    "_id": "2P4ew3n0aFKlAn3Aum9jzF",
    "title": "SleekSpin",
    "priceWithoutDiscount": null,
    "category": {
      "_id": "b5710116-09af-4d0e-aa9a-dcd02fe919a9",
      "title": "Desk Chair"
    },
    "tags": [
      "gallery"
    ],
    "price": 20,
    "badge": null,
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/81a5b7de166f930870a82f8f3e661b38a70de9f4-312x312.png",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "inventory": 10
  },
```




Required Schema:
```json 
        {
        "id": 1,
        "product_name": "Modern Leather Dining Chair",
        "price": 129.99,
        "ratings": 4.5,
        "ratings_in_count": 150,
        "quantity_available": 50,
        "discountPercentage":,
        "short_description": "Sleek design, durable leather",
        "long_description": "Comfortable seating, easy to clean, perfect for modern dining rooms.",
        "image": "/stock/1.jpg",
        "sizes":["XS", "S", "M","L", "XL"],
        "tags":["Featured", "Top rated"],
        "categories":["Sofas"],
    },
```