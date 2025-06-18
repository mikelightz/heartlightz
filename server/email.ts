import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(contactData: ContactFormData): Promise<boolean> {
  try {
    const msg = {
      to: 'heartlightzstudio@gmail.com',
      from: 'heartlightzstudio@gmail.com',
      replyTo: contactData.email, // Allow replying directly to the sender
      subject: 'New Contact Form Submission - HeArt Lightz',
      text: `
New contact form submission from HeArt Lightz website:

Name: ${contactData.name}
Email: ${contactData.email}

Message:
${contactData.message}

---
This message was sent from the HeArt Lightz contact form.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ae0000;">New Contact Form Submission</h2>
          <p>A new message has been received from the HeArt Lightz website:</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${contactData.message}</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ccc;">
          <p style="color: #666; font-size: 12px;">This message was sent from the HeArt Lightz contact form.</p>
        </div>
      `
    };

    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}