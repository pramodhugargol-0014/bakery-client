import { NextResponse } from "next/server";

export async function POST() {
    const res = await fetch(
        "https://render-demo-krishj.onrender.com/predict_all",
        {
            method: "POST",
            cache: "no-store",
        }
    );
    const data = await res.json()
    return NextResponse.json(data);
}
