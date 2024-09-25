import { NextResponse } from "next/server";

export async function GET(request){
    console.log("BlogGet HIt");
    return NextResponse.json({message:"BlogGet API working"});
}