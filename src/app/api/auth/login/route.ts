import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";
export async function POST(request : NextRequest){
  try{

    // getting data 

    const {email, password} = await request.json()

    // validate

    if (!email || !password){
      return NextResponse.json(
        {message : "Email and Password are required"},
        {status : 400}
      )
    }

    // checking in database

    const checkurl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/users?email=eq.${email.toLowerCase()}&select=*`;

    const response = await fetch (checkurl,{
      method : 'GET',
      headers : {
        'apikey' : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`
      }
    })

    // user exists or not

    const users = await response.json();

    if(!users || users.length === 0){
      return NextResponse.json(
        {error : "Invalid Email or Password"},
        {status : 401}
      )

    }
    const user = users[0];

    //  const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (password != user.password_hash) {
      return NextResponse.json(
        { error: "Invalid Email or Password" },
        { status: 401 }
      );
    }

    // create token
    const token = jwt.sign({
      userId : user.id,
      email : user.email
    },
    process.env.JWT_SECRET || "fallbac secret key",
    { expiresIn : '120s'}
    )


    const res = NextResponse.json(
      {
       message : "Login Successfull",
       user : {
        id : user.id,
        email : user.email,
        fullname : user.full_name
       },
      },
      {status : 200}
      
    )

    res.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

      return res

  }catch(error){
    return NextResponse.json(
      {error : "Internal Server Error"},
      {status : 500}
    )
  }
}

