import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://render-demo-krishj.onrender.com/predict_all",
    {
      method: "GET",
      cache: "no-store",
    }
  );

  // Safety check
  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const text = await res.text();
    console.error("Non-JSON response:", text);
    return NextResponse.json(
      { error: "Backend did not return JSON" },
      { status: 500 }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
