import type { APIRoute } from "astro";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactEmail from "~/emails/contact";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {
  const emailContent = ContactEmail({username: "Yuna"});
  const html = await render(emailContent);
  const text = await render(emailContent, {
    plainText: true
  });  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "",
    subject: "Hello",
    html,
    text
  })

  if (error) {
    return new Response(JSON.stringify(error));
  }

  return new Response(JSON.stringify(data));
};