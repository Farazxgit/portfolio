import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request : NextRequest) {

  try{

    //get data ( step 1)

    const {fullname, email, password} = await request.json()

    // validation

    if(!email || !password){
      return NextResponse.json(
        {error: "Email and Password are required"},
        {status: 400}
      )
    }

    if(password.length < 6){
      return NextResponse.json(
        {error : "Password length must contains alteast 6 characters"},
        {status: 400}
    )
    }

    // save to database 

    const checkurl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/users?email=eq.${email.toLowerCase()}&select=email`

    // get user and verifying email

    const checkResponse = await fetch(checkurl,{
      method: 'GET',
      headers : {
        'apikey' : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`
      }

    })

    const existingUsers = await checkResponse.json()

    if( existingUsers.length > 0){
      return NextResponse.json(
        {error: "user already exists with this email"},
        {status : 400}
      )
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // inserting new data now 

    const inserturl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/users`

    const insertResponse = await fetch(inserturl, {
      method : 'Post',
      headers : {
        'apikey' : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
        'Content-Type' : 'application/json',
        'Prefer' : 'return=representation',
      },
      body : JSON.stringify ({
        full_name : fullname,
        email : email.toLowerCase(),
        password_hash: hashedPassword,
      })
    })

    if(!insertResponse.ok){
      const error = await insertResponse.json()
      console.log("error",error)
      return NextResponse.json(
        {error: "Failed to create user"},
        {status: 500}
      )
    }

    // return
    const newUser = await insertResponse.json()

    return NextResponse.json(
      {message : "Account created successfully",
      user:{
        id : newUser[0].id,
        email : newUser[0].email,
        fullname : newUser[0].full_name
      }
    },
      {status : 201}
    )

    // catch ( try and catch )

} catch ( error ) {
  console.log("signup error", error)
  return NextResponse.json(
  {error : "Internal server error"},
  {status : 500}
)}

}







