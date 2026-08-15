import { Resend } from "resend";

// Helper for parsing JSON bodies in serverless functions (standard Vercel signature provides parsed req.body)
export default async function handler(req: any, res: any) {
  // Only accept POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    // 1. Server-Side Validations
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({ error: "Name is required." });
    }
    if (name.length > 100) {
      return res.status(400).json({ error: "Name must be less than 100 characters." });
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return res.status(400).json({ error: "Email is required." });
    }
    if (email.length > 254) {
      return res.status(400).json({ error: "Email must be less than 254 characters." });
    }
    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    if (!subject || typeof subject !== "string" || !subject.trim()) {
      return res.status(400).json({ error: "Subject is required." });
    }
    if (subject.length > 200) {
      return res.status(400).json({ error: "Subject must be less than 200 characters." });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Message is required." });
    }
    if (message.length > 5000) {
      return res.status(400).json({ error: "Message must be less than 5000 characters." });
    }

    // 2. Read Configuration
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "lathikakumar798@gmail.com";
    const fromEmail = process.env.EMAIL_FROM || "onboarding@resend.dev";

    if (!apiKey) {
      console.error("Server Configuration Error: RESEND_API_KEY environment variable is not defined.");
      return res.status(500).json({ error: "Mail configuration error on server." });
    }

    // 3. Initialize Resend
    const resend = new Resend(apiKey);

    // 4. Clean and Escape inputs to prevent HTML injection in template
    const cleanName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const cleanEmail = email.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const cleanSubject = subject.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const cleanMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // 5. Send Email via Resend SDK
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Portfolio Contact: ${cleanSubject}`,
      replyTo: cleanEmail,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; margin: 0; padding: 0; background-color: #f8fafc; }
            .wrapper { width: 100%; table-layout: fixed; background-color: #f8fafc; padding: 40px 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); }
            .header { border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 24px; }
            .title { font-size: 22px; font-weight: 800; color: #4f46e5; margin: 0; }
            .subtitle { margin: 6px 0 0 0; font-size: 14px; color: #64748b; font-weight: 500; }
            .label { font-weight: 700; color: #475569; margin-top: 20px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
            .value { background: #f8fafc; padding: 12px 16px; border-radius: 8px; border: 1px solid #f1f5f9; margin-top: 6px; font-size: 14px; color: #0f172a; }
            .message-text { white-space: pre-wrap; font-size: 14px; color: #0f172a; line-height: 1.7; }
            .footer { margin-top: 32px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 16px; letter-spacing: 0.5px; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="container">
              <div class="header">
                <h2 class="title">New Portfolio Contact</h2>
                <p class="subtitle">You received a new message from your portfolio website.</p>
              </div>
              
              <div class="label">Name</div>
              <div class="value">${cleanName}</div>
              
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${cleanEmail}" style="color: #4f46e5; text-decoration: none; font-weight: 600;">${cleanEmail}</a></div>
              
              <div class="label">Subject</div>
              <div class="value">${cleanSubject}</div>
              
              <div class="label">Message</div>
              <div class="value message-text">${cleanMessage}</div>
              
              <div class="footer">
                This message was dispatched securely from the contact form at lathikakumar.dev.
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      console.error("Resend API Error details:", error);
      return res.status(500).json({ error: "Failed to send email through delivery partner." });
    }

    return res.status(200).json({ success: true, message: "Email sent successfully", id: data?.id });

  } catch (err: any) {
    console.error("Server API Exception caught:", err);
    return res.status(500).json({ error: "Internal server error occurred." });
  }
}
