// ----------------------> schema for validation and sanitization of shipment info section of checkout form

import z from "zod";

const ShipmentInfoCheckoutSchema = z.object({
    country:z.string({message:"Please enter a valid country name"}).min(3).max(15),
    province:z.string({message:`Please enter a valid province of this country`}).min(3).max(15),
    city:z.string({message:"Please enter a valid city name"}).min(3).max(15),
    postalcode:z.string({message:"Please enter a valid postal code"}).min(3).max(10)
}).strict();
export default ShipmentInfoCheckoutSchema;