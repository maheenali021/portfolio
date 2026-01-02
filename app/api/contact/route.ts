import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"

export async function POST(request: Request) {
    try {
        const { email, subject, message } = await request.json()

        // Create transporter
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        })
       
        // Send mail
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: `New Message: ${subject}`,
            text: `From: ${email}\nMessage: ${message}`,
            html: `<p>From: ${email}</p><p>Message: ${message}</p>`
        })

        return NextResponse.json({ success: true })
    } catch (error:any) {
        console.error("Email error:" ,error);
        return NextResponse.json(
            { error: error.message || "Fail to send email" },
            { status: 500 }
        )
    }
}