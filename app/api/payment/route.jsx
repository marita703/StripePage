import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  let data = await request.json();

  let priceId = data.priceId;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    custom_fields: [{}],
    mode: "payment",
    success_url: "https://localhost:3000",
    cancel_url: "https://localhost:3000",
  });

  return NextResponse.json(session.url);
}
