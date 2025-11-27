import { NextRequest, NextResponse } from "next/server";
import jwt  from "jsonwebtoken";
export async function GET(request: NextRequest) {
  try{

    // get token 

    const token = request.cookies.get('auth-token')?.value

    // if no token

    if(!token){
      return NextResponse.json(
        {error : "Not logged in"},
        {status: 401}
      )
    }

    // verfiy and decode the token

    const decode = jwt.verify(token,
      process.env.JWT_SECRET  || "fallback-key"

    ) as { userId : string, email : string}

    // get user from database 

    const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/users?id=eq.${decode.userId}&select=*`

    const userResponse = await fetch (url, {
      method : "GET",
      headers : {
        'apikey' : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`
      }
    })

    const users = await userResponse.json();

    if (!users || users.length === 0){
      return NextResponse.json(
        {error : "User not found"},
        {status : 404}
      )
    }

    const user = await users[0]
       return NextResponse.json(
        { user :
          {
            userid : user.id,
            email : user.email,
            fullname : user.full_name
        }
        }, { status : 200}
       )
    
  }catch (error){
    return NextResponse.json(
      {error : "Invalid or expired token"},
      {status : 401}
    )
  }
}