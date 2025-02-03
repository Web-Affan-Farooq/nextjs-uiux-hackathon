// -------> Data validation Schema for contact page
import z from "zod";

const ContactPageSchema = z.object({
         name:z.string({message:"Username is required"}).min(10, "Name must contain minimum 10 characters").max(30, "Name can maximum contains 30 characters"),
         email:z.string({message:"Email with correct format is required"}).email({message:"Invalid email address"}),
         subject:z.string({message:"Subject is required"}).min(20, "Subject must contain minimum 20 characters").max(100, "Subject can maximum contains 65 characters"),
         message:z.string({message:"Please enter a consise message"}).min(30, "Please lenghthen yor message").max(700, "Please consise your message or directly mail to us")
}).strict();

export default ContactPageSchema;