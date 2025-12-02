import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export async function POST(request : NextRequest){

    
    try{
        // get data

        const {token, password} = await request.json()
        

        // validation 

        if(!token || !password){
            return NextResponse.json(
                {message : "Password fields cant be empty"},
                {status : 400}
            )
        }

        // get user with token

        const findurl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/users?reset_token=eq.${token}&select=*`;

        const response = await fetch (findurl, {
            method: 'GET',
            headers:{
                'apikey' : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
                'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
            }
        })

        const result = await response.json();

        if(!result || result.length === 0){
            return NextResponse.json(
                {error : 'Invalid Token'},
                {status : 400}
            )
        }

        const user = result[0];

        // check expiry 

        if (new Date() > new Date(user.reset_token_expiry + 'Z')){
            console.log('Token expired!')
            return NextResponse.json(
                {message : 'Token has expired'},
                {status : 400}
            )
        }

        // encrypt password 

        const hashpassword = await bcrypt.hash(password , 10 );

        // updating password

        const updateurl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/users?id=eq.${user.id}`

        const updateResponse = await fetch(updateurl, {

            method : 'PATCH',
            headers : {
                'apikey' : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
                'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                password_hash : hashpassword,
                reset_token : null,
                reset_token_expiry : null
            })
            }
        )
        
        return NextResponse.json({
            message : "Password reset successfully",
        })


    }catch(error){
        return NextResponse.json(
            {message : 'something went wrong'},
            {status : 500})
    }

}