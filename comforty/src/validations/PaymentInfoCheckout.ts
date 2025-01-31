// ----------------------> schema for validation and sanitization of payment info section of checkout form
// attach more solid validation in it

import z from "zod";

const PaymentInfoCheckoutSchema = z.object(
    {
        cardnumber:z.string(),
        expDate:z.date(),
        CVV:z.string().regex(/^[0-9]{3,4}$/, "incorrect pattern of CVV"),
        instructions:z.string().min(50).max(200),
    }
).strict()
