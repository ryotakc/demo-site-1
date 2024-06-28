'use server';

import { EmailTemplate } from "./email-template";
import { formSchema, FormData } from "./schema";
import { Resend } from "resend";

export const sendEmail = async (data: FormData) => {
    const result = formSchema.safeParse(data);

    if (!result.success) {
        return {error: result.error};
    }

    
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
        from: 'Ryota <onboarding@resend.dev>',
        to: [data.email],
        subject: 'We had a new message from ' + data.name,
        react: EmailTemplate( data ),
        text: 'Welcome, ' + data.name + '! Thank you for your message!',
    });

    if (error) {
        return {error};
    }

}


