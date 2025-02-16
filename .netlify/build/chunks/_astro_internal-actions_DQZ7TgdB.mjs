import './_astro_actions_DHUXuPxj.mjs';
import * as z from 'zod';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Html, Head, Preview, Body, Container, Section, Text } from '@react-email/components';
import 'react';
import { d as defineAction } from './server_CGpgGltl.mjs';

const ContactEmail = ({ name, email, message }) => /* @__PURE__ */ jsxs(Html, { children: [
  /* @__PURE__ */ jsx(Head, {}),
  /* @__PURE__ */ jsxs(Preview, { children: [
    "New Contact Message from ",
    name
  ] }),
  /* @__PURE__ */ jsx(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
    /* @__PURE__ */ jsxs(Section, { style: section, children: [
      /* @__PURE__ */ jsx(Text, { style: title, children: "New Contact Message" }),
      /* @__PURE__ */ jsxs(Text, { style: text, children: [
        /* @__PURE__ */ jsx("strong", { children: "Name:" }),
        " ",
        name
      ] }),
      /* @__PURE__ */ jsxs(Text, { style: text, children: [
        /* @__PURE__ */ jsx("strong", { children: "Email:" }),
        " ",
        email
      ] }),
      /* @__PURE__ */ jsx(Text, { style: text, children: /* @__PURE__ */ jsx("strong", { children: "Message:" }) }),
      /* @__PURE__ */ jsx(Text, { style: messageStyle, children: message })
    ] }),
    /* @__PURE__ */ jsx(Text, { style: footer, children: "This email was automatically generated. Please do not reply directly." })
  ] }) })
] });
const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'
};
const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px"
};
const title = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px"
};
const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "left",
  backgroundColor: "#f9f9f9"
};
const text = {
  margin: "0 0 10px 0"
};
const messageStyle = {
  backgroundColor: "#e6e6e6",
  padding: "12px",
  borderRadius: "5px"
};
const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center",
  marginTop: "40px"
};

const sendEmail = defineAction({
  accept: "form",
  input: z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string().max(1e3),
    disclaimer: z.boolean()
  }),
  handler: async ({ name, email, message }) => {
    const resend = new Resend("re_YHnS5Yac_5qE9gB7qDDkzXfmoDqWWjoQZ");
    const emailContent = ContactEmail({ name, email, message });
    const html = await render(emailContent);
    const text = await render(emailContent, { plainText: true });
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "yunataniguchi23@gmail.com",
      subject: "Hello",
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

const server = {
  sendEmail
};

export { server };
