import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.redirect(
    new URL("/clubs", process.env.NEXT_PUBLIC_BASE_URL ?? "https://edison-student-life.vercel.app")
  );
}
