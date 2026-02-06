'use server';

import nodemailer from 'nodemailer';

type ContactEmailProps = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function sendContactEmail({ name, email, phone, message }: ContactEmailProps) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
    console.error('SMTP environment variables are not set. Please configure them in your .env file.');
    throw new Error('The server is not configured to send emails. Please contact the administrator.');
  }

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT, 10),
    secure: parseInt(SMTP_PORT, 10) === 465, // Use true for port 465, false for others
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    await transport.verify();
  } catch (error) {
    console.error('SMTP transport verification failed:', error);
    throw new Error('Failed to connect to the email server. Please check your SMTP settings.');
  }

  const mailOptions = {
    from: `Contact Form <${SMTP_USER}>`,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `New contact form submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <p>You have received a new message from your website's contact form.</p>
        <hr>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <h3 style="color: #333;">Message:</h3>
        <div style="background-color: #f9f9f9; border-left: 4px solid #ccc; padding: 10px 15px;">
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
        <hr>
        <p style="font-size: 0.9em; color: #777;">This email was sent from your website's contact form.</p>
      </div>
    `,
  };

  try {
    await transport.sendMail(mailOptions);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('An error occurred while sending the message. Please try again.');
  }
}
