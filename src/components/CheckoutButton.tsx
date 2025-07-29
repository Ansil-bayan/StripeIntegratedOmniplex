// src/components/CheckoutButton.tsx
"use client";

import { loadStripe } from '@stripe/stripe-js';

// The key must be asserted as non-null for TypeScript
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutButton() {
  const handleClick = async () => {
    const stripe = await stripePromise;
    
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    
    const session = await response.json();

    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result?.error) {
      alert(result.error.message);
    }
  };

  return <button onClick={handleClick}>Buy Pro Plan</button>;
}