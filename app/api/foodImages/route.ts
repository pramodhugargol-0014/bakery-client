import { createClient } from "pexels";
import { NextResponse } from "next/server";

const client = createClient(String(process.env.PEXELS_API_KEY));

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  if (!q) {
    return NextResponse.json(
      { error: "Missing query parameter" },
      { status: 400 }
    );
  }

  const result = await client.photos.search({
    query: `${q} bakery food`,
    per_page: 1,
  });

  if ("error" in result) {
    return NextResponse.json(
      { error: result.error },
      { status: 500 }
    );
  }

  return NextResponse.json({
    image: result.photos[0]?.src?.small ?? null,
  });
}
