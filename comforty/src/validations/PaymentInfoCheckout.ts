// ----------------------> schema for validation and sanitization of payment info section of checkout form
// attach more solid validation in it

import z from "zod";

const PaymentInfoCheckoutSchema = z.object(
    {
        accountnumber:z.string({message:"Please enter account number in correct format"}).regex(/^(?:\d{13,19}|\d{4}[- ]\d{4}[- ]\d{4}[- ]\d{4}|\d{4}[- ]\d{6}[- ]\d{5})$/, "Check the account number and try again"),
        cardnumber:z.string({message:"Please enter card number in correct format"}).regex(/^(?:\d{13,19}|\d{4}[- ]\d{4}[- ]\d{4}[- ]\d{4}|\d{4}[- ]\d{6}[- ]\d{5})$/, "Check the card number and try again"),
        expDate: z.string({message:"Please enter date in correct format"}).date(), // validates --------------> 2025-01-11
        CVV:z.string({message:"Please enter CVV in correct format"}).regex(/^[0-9]{3,4}$/, "incorrect pattern of CVV"),
        instructions:z.string({message:"Required minimum 50 and maximum 200 characters only in delivery instructions"}).min(50).max(200),
    }
).strict()
export default PaymentInfoCheckoutSchema;