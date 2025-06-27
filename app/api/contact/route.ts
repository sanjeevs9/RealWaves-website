import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, industry, description } = body;

    // Validate form inputs
    if (!name || !email || !industry || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
      New Contact Form Submission:
      
      Name: ${name}
      Email: ${email}
      Industry: ${industry}
      Description: ${description}
    `;

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For this example, we'll just log the email content and simulate a successful send
    console.log('Email would be sent with content:', emailContent);
    
    // Simulate sending email to info@realwavespacks.com
    // In production, replace this with actual email sending logic
    
    // Example with Nodemailer (commented out):
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.EMAIL_SECURE),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: 'info@realwavespacks.com',
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
    });
    */

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
} 