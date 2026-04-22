import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { email, service, description } = await req.json();

        // Basic validation
        if (!email || !description || !service?.length) {
            return Response.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Create transporter (Mailhostbox SMTP)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // must be false for port 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, // helps avoid Vercel TLS issues
            },
        });

        // Send email
        const info = await transporter.sendMail({
            from: `"Gemz Software" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // receiving email
            replyTo: email, // user email
            subject: `New Consultation: ${service[0] || "Inquiry"}`,

            // ✅ HTML email (better deliverability)
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color:#10b981;">New Consultation Request</h2>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Services:</strong><br/>
          ${service.map((s) => `• ${s}`).join("<br/>")}
          </p>

          <p><strong>Message:</strong></p>
          <p style="background:#f9fafb; padding:15px; border-radius:8px;">
            ${description}
          </p>
        </div>
      `,
        });

        console.log("Email sent:", info.response);

        return Response.json({ success: true });
    } catch (error) {
        console.error("EMAIL ERROR:", error);

        return Response.json(
            {
                success: false,
                message: "Server failed to send email",
                error: error.message,
            },
            { status: 500 }
        );
    }
}