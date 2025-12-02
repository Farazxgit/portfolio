'use server'

import nodemailer from 'nodemailer'

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;

const transporter = nodemailer.createTransport({
    service : 'gmail',
    // host : SMTP_SERVER_HOST,
    // port : 587,
    // secure : true,
    auth : {
        user : process.env.SMTP_SERVER_USERNAME,
        pass : process.env.SMTP_SERVER_PASSWORD,
    },
});

export async function sendMail({
    email,
    sendTo,
    subject,
    text,
    html,
}: {
    email: any,
    sendTo: string,
    subject: string,
    text: string,
    html?: string,
}){
    try{
        const isVerified = await transporter.verify();
    }catch(error){
        console.log("Something went wrong", SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error)
    }

    const info = await transporter.sendMail({
        from: email,
        to: sendTo || SITE_MAIL_RECEIVER,
        subject: subject,
        text: text ?? '',
        html: html ?? ''
    });
    console.log("Message Sent", info.messageId);
    console.log("Mail Sent to", SITE_MAIL_RECEIVER);
    return info;
}