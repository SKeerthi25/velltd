import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Spam Honeypot Detection
    if (data.honeypot && data.honeypot.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    console.log("=== NEW CONTACT ENQUIRY FOR P SELVAM LTD ===");
    console.log(`To: cctv@pselvam.com`);
    console.log(`From: ${data.name} (${data.email}, ${data.phone || "No phone"})`);
    console.log(`Service: ${data.service}`);
    console.log(`Message: ${data.message}`);
    console.log("============================================");

    return NextResponse.json({
      success: true,
      message: "Message received successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please email cctv@pselvam.com directly." },
      { status: 500 }
    );
  }
}
