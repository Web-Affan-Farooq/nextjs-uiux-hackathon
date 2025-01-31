// ----------------------> schema for validation and sanitization of personal info section of checkout form

import z from 'zod';

const personalInfoCheckoutSchema = z.object(
    {
     name:z.string({message:"Username is required"}).min(10, "must contain minimum 10 characters").max(30, "Name can maximum contains 30 characters"),
     email:z.string({message:"Email with correct format is required"}).email({message:"Invalide email address"}),
     phonenumber: z.string().regex(/^(\+?\d{1,4})?[0-9]{10,15}$/,"Incorrect phonenumber pattern"),
     address:z.string().min(80).max(150),
    }
).strict();

export default personalInfoCheckoutSchema;