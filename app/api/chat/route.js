export async function POST(request) {
  try {
    const body = await request.json();
    const message = body.message?.trim();

    if (!message) {
      return Response.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-5-mini",
        instructions: `You are AYLIVO, an AI business assistant.

You help customers with:
- Business enquiries
- Services and prices
- Booking requests
- Product enquiries and sales

Reply in the same language the customer uses.
You can communicate in English, Bahasa Malaysia, and Arabic.

Be friendly, professional, concise, and helpful.

This is an AYLIVO demonstration. Do not pretend AYLIVO owns a salon, spa, or other business.
If business-specific information is not available, clearly say this is a demo and do not invent prices, availability, or services.`,
        input: message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      return Response.json(
        { error: "AI service error" },
        { status: 500 }
      );
    }

    return Response.json({
      reply: data.output_text || "Sorry, I couldn't generate a response.",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
