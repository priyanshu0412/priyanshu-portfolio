import nodemailer from "nodemailer";

// ---------------------------------------

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { firstName, lastName, email, phone, message } = req.body;
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER, // Use your verified email
                to: process.env.EMAIL_RECEIVER,
                subject: `New Contact Form Submission from ${firstName} ${lastName}`,
                text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
                replyTo: email, // This allows the recipient to reply directly to the sender
            };


            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: "Email sent successfully!" });
        } catch (error) {
            console.error("Email sending failed:", error);
            res.status(500).json({ message: "Email sending failed!" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
