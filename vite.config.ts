import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { Resend } from 'resend'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env files in the current working directory without needing 'VITE_' prefix
  const env = loadEnv(mode, process.cwd(), '');

  const apiKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_EMAIL || 'lathikakumar798@gmail.com';
  const fromEmail = env.EMAIL_FROM || 'onboarding@resend.dev';

  // Server-side safe diagnostic output (does NOT print the actual key)
  console.log("--------------------------------------------------");
  console.log(`[Vite Server Config] RESEND_API_KEY loaded: ${Boolean(apiKey && apiKey.trim())}`);
  console.log(`[Vite Server Config] CONTACT_EMAIL: ${toEmail}`);
  console.log(`[Vite Server Config] EMAIL_FROM: ${fromEmail}`);
  console.log("--------------------------------------------------");

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'api-contact-local',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/contact' && req.method === 'POST') {
              let body = '';
              
              req.on('data', (chunk) => {
                body += chunk;
              });

              req.on('end', async () => {
                try {
                  const data = JSON.parse(body || '{}');
                  const { name, email, subject, message } = data;

                  // 1. Server-side validations locally
                  if (!name || typeof name !== 'string' || !name.trim()) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: "Name is required." }));
                  }
                  if (name.length > 100) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: "Name must be less than 100 characters." }));
                  }

                  if (!email || typeof email !== 'string' || !email.trim()) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: "Email is required." }));
                  }
                  if (email.length > 254) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: "Email must be less than 254 characters." }));
                  }
                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: "Please provide a valid email address." }));
                  }

                  if (!subject || typeof subject !== 'string' || !subject.trim()) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: "Subject is required." }));
                  }
                  if (subject.length > 200) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: "Subject must be less than 200 characters." }));
                  }

                  if (!message || typeof message !== 'string' || !message.trim()) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: "Message is required." }));
                  }
                  if (message.length > 5000) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: "Message must be less than 5000 characters." }));
                  }

                  // 2. Verify Key Presence inside handler
                  if (!apiKey || !apiKey.trim()) {
                    console.error("Local Server Error: RESEND_API_KEY is not defined in local .env.");
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: "Mail configuration error on server. Check RESEND_API_KEY in .env." }));
                  }

                  // 3. Send email using Resend
                  const resend = new Resend(apiKey);
                  const cleanName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                  const cleanEmail = email.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                  const cleanSubject = subject.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                  const cleanMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

                  const result = await resend.emails.send({
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
                              <h2 class="title">New Portfolio Contact (Local Dev)</h2>
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
                              This message was dispatched securely from local dev contact form.
                            </div>
                          </div>
                        </div>
                      </body>
                      </html>
                    `
                  });

                  if (result.error) {
                    console.error("Local Resend error:", result.error);
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: result.error.message || "Failed to deliver email locally." }));
                  }

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  return res.end(JSON.stringify({ success: true, message: "Email sent successfully", id: result.data?.id }));

                } catch (err: any) {
                  console.error("Local API execution exception:", err);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  return res.end(JSON.stringify({ error: err.message || "Internal server error occurred." }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ],
  };
})
