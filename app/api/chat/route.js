export async function POST(request) {
  try {
    const body = await request.json();
    const message = body.message || "";

    if (!message) {
      return Response.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    return Response.json({
      reply: `AYLIVO received your message: ${message}`
    });

  } catch (error) {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
