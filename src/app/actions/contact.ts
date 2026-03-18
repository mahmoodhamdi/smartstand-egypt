"use server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactResult {
  success: boolean;
  error?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .trim();
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactResult> {
  const name = sanitize(formData.name);
  const email = sanitize(formData.email);
  const message = sanitize(formData.message);

  if (!name || name.length < 2) {
    return { success: false, error: "Please enter a valid name (at least 2 characters)." };
  }

  if (name.length > 100) {
    return { success: false, error: "Name must be under 100 characters." };
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (email.length > 254) {
    return { success: false, error: "Email address is too long." };
  }

  if (!message || message.length < 10) {
    return { success: false, error: "Please enter a message (at least 10 characters)." };
  }

  if (message.length > 5000) {
    return { success: false, error: "Message must be under 5000 characters." };
  }

  // TODO: Connect to email service (Resend, SendGrid, Nodemailer, etc.)
  // For now, the form validates and accepts submissions.
  // To enable email delivery, add one of:
  //   - Resend: npm install resend → import { Resend } from 'resend'
  //   - Nodemailer: npm install nodemailer → configure SMTP transport
  //   - SendGrid: npm install @sendgrid/mail → configure API key
  //
  // Example with Resend:
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'noreply@smartstand-eg.com',
  //     to: 'info@smartstand-eg.com',
  //     subject: `Contact Form: ${name}`,
  //     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  //   });

  return { success: true };
}
