interface Product {
    id:string;
    product_name:string;
    quantity:number;
    _key:string;
}

interface PaymentInfo {
    CVV:string;
    accountNumber:string;
    amountPayable:string;
    cardHolderName:string;
    cardNumber:string;
    description:string;
    expirationDate:string;
    orderStatus:string;
}
interface ShippingInfo {
    country:string;
    province:string;
    city:string;
    postalCode:string;
    fullName:string;
    completeAddress:string;
    email:string;
    phoneNumber:string;
}
export interface Order {
    _id: string;
    _updatedAt: string;
    paymentInfo:PaymentInfo;
    shippingInfo:ShippingInfo;
    packages: {
        products: Product[]
    }
}