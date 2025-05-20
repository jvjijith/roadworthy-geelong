import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { to, subject, formData } = await request.json();
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    
    // Format the email content
    const formatFormData = () => {
      let content = '';
      for (const [key, value] of Object.entries(formData)) {
        content += `<p><strong>${key}:</strong> ${value}</p>`;
      }
      return content;
    };
    
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: `
        <h1>New Booking Request</h1>
        <h2>${subject}</h2>
        <div>${formatFormData()}</div>
      `,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}