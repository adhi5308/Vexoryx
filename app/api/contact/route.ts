import { NextResponse } from "next/server";

// No database is used here. This route just receives the enquiry.
// To actually deliver it to your inbox, plug in an email provider,
// e.g. Resend (https://resend.com) or Formspree, and send the
// `data` object below instead of (or in addition to) logging it.
export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: send `data` via your email provider of choice.
    console.log("New enquiry:", data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
