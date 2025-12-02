import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { randomBytes } from 'crypto';
import { sendMail } from "@/lib/send-mail";

export async function POST(request : NextRequest){

    try{
        
    // get data 

    const {email} = await request.json();

    // validate 

    if(!email){
        return NextResponse.json(
            {error : "Email required"},
            {status : 400}
        )
    }

    // if email exists 

    const chkEmail = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/users?email=eq.${email.toLowerCase()}&select=*`
    
    const response = await fetch (chkEmail, {
        method : "GET",
        headers : {
            'apikey' : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
        }
    })
   
    const result = await response.json();
    console.log(result, "email exists")

    if(!result || result.length === 0){
        return NextResponse.json(
            {error : "No user found"},
            {status : 401}
        )
    }
    
    const user = result[0]

    const resetToken = randomBytes(2).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000).toISOString(); // 1 hour from now

    // 2. Save token to DB
    const updateUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/users?id=eq.${user.id}`;

    await fetch(updateUrl, {
      method: "PATCH",
      headers: {
        'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reset_token: resetToken,
        reset_token_expiry: resetTokenExpiry
      })
    });
   
    // 3. Send email
    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/resetpassword?token=${resetToken}`;
    // console.log('Reset link:', resetLink)

    await sendMail({
      email: process.env.NEXT_SERVER_USERNAME,
      sendTo: email,
      subject: 'Reset Your Password',
      text : '',
      html: `
        <h2>Password Reset Request</h2>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>This link expires in 1 hour.</p>
        <p>If you didn't request this, ignore this email.</p>
      `
    });

    return NextResponse.json({ message: "Reset link sent to your email" });


    }catch (error){
        console.log('Full error:', error);
        return NextResponse.json(
            {error : "Internal Server Error"},
            {status : 500}
        )
    }
}