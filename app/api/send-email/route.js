import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();

        const { email, service, description } = body;

        if (!email || !service || service.length === 0 || !description) {
            return Response.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        // ✅ Your SAME SMTP config (Mailhostbox)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // 587 = TLS upgrade
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "support@gemzsoftware.com",
            replyTo: email,
            subject: `New Consultation: ${
                Array.isArray(service) ? service[0] : "Inquiry"
            }`,
            text: `From: ${email}\nServices: ${service}\nMessage: ${description}`,
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("Email sent:", info.response);

        return Response.json({ message: "Email sent successfully" });

    } catch (error) {
        console.error("EMAIL ERROR:", error);

        return Response.json(
            {
                message: "Server failed to send email",
                error: error.message,
            },
            { status: 500 }
        );
    }
}