import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactEmail from "~/emails/contact";

const sendEmail = defineAction({
  accept: "form",
  input: z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string().max(1000),
    disclaimer: z.boolean()
  }),
  handler: async ({ name, email, message }) => {
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    const emailContent = ContactEmail({ name, email, message });
    const html = await render(emailContent);
    const text = await render(emailContent, { plainText: true });

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: import.meta.env.MY_EMAIL,
      subject: "Contact From User",
      html,
      text
    });

    if (error) {
      console.error("Resend API Error:", error);
      throw new Error("Failed to send email");
    }
    

    return data;
  }
});
export default sendEmail;