import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to client/admin
    const clientMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CLIENT_EMAIL || process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
            <p style="margin: 0; color: #16a34a; font-size: 14px;">
              <strong>East End Agricultural Platform</strong><br>
              This email was sent from the contact form on your website.
            </p>
          </div>
        </div>
      `,
    };

    // Confirmation email to the person who submitted the form
    const confirmationMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting East End Agricultural Platform',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">
            Thank You for Your Message
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to East End Agricultural Platform. We have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p>Our team typically responds within 24-48 hours during business days. If you have any urgent inquiries, please don't hesitate to call us directly.</p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #e8f5e8; border-radius: 8px;">
            <h3 style="color: #16a34a; margin-top: 0;">About East End Agricultural Platform</h3>
            <p style="margin-bottom: 0; color: #555;">
              We specialize in agricultural trading projects that provide consistent monthly profits to our participants. 
              Join thousands of satisfied participants who are already earning from sustainable agricultural trading.
            </p>
          </div>
          
          <p style="margin-top: 20px;">
            Best regards,<br>
            <strong>The East End Agricultural Platform Team</strong>
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(confirmationMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
