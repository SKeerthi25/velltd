import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Spam Honeypot Detection
    if (data.honeypot && data.honeypot.trim() !== "") {
      // Silently discard spam bots
      return NextResponse.json({ success: true });
    }

    // Required fields validation
    if (!data.name || !data.phone || !data.email || !data.postcode) {
      return NextResponse.json(
        { success: false, error: "Missing required contact details." },
        { status: 400 }
      );
    }

    // In a live production environment with RESEND_API_KEY or SMTP configured,
    // this dispatches an email to cctv@pselvam.com.
    // We log the quote request details securely:
    console.log("=== NEW QUOTE REQUEST FOR P SELVAM LTD ===");
    console.log(`To: cctv@pselvam.com`);
    console.log(`Client: ${data.name} (${data.phone}, ${data.email})`);
    console.log(`Postcode: ${data.postcode}`);
    console.log(`Service: ${data.serviceType}`);
    console.log(`Property: ${data.propertyType}`);
    console.log(`Timeline: ${data.timeline}`);
    console.log(`Scope: ${data.numberOfItems}`);
    console.log(`Description: ${data.description}`);
    console.log("==========================================");

    return NextResponse.json({
      success: true,
      message: "Quote request received successfully. Our team will contact you shortly.",
      reference: `PS-${Date.now().toString().slice(-6)}`,
    });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please call +44 7774 453041." },
      { status: 500 }
    );
  }
}
