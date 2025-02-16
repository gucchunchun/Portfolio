import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New Contact Message from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={section}>
          <Text style={title}>New Contact Message</Text>
          <Text style={text}><strong>Name:</strong> {name}</Text>
          <Text style={text}><strong>Email:</strong> {email}</Text>
          <Text style={text}><strong>Message:</strong></Text>
          <Text style={messageStyle}>{message}</Text>
        </Section>
        <Text style={footer}>
          This email was automatically generated. Please do not reply directly.
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
};

const title = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'left' as const,
  backgroundColor: '#f9f9f9',
};

const text = {
  margin: '0 0 10px 0',
};

const messageStyle = {
  backgroundColor: '#e6e6e6',
  padding: '12px',
  borderRadius: '5px',
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '40px',
};

export default ContactEmail;
