'use client';

import { useState } from 'react';
import Script from 'next/script';
import { Loader2 } from 'lucide-react';

interface CheckoutProps {
  variant: 'variant-a' | 'variant-b';
}

export default function Checkout({ variant }: CheckoutProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const processPayment = async () => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ variant }),
      });
      
      const order = await res.json();

      if (order.error) {
        throw new Error(order.error);
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_mock',
        amount: order.amount,
        currency: order.currency,
        name: 'AUREYA',
        description: variant === 'variant-a' ? 'The Discovery Ritual (20 Capsules)' : 'The Cellular Reset (60 Capsules)',
        order_id: order.orderId,
        handler: async function (response: any) {
          const verifyRes = await fetch('/api/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          
          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            setMessage('Payment Successful. Welcome to Aureya.');
          } else {
            setMessage('Payment verification failed.');
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: {
          color: '#111111',
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (err: any) {
      console.error(err);
      setMessage(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="mt-12">
        <button
          onClick={processPayment}
          disabled={loading}
          className="w-full md:w-auto px-12 py-4 bg-foreground text-background font-sans text-sm tracking-[0.2em] uppercase transition-all hover:bg-accent hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Acquire Now'}
        </button>
        {message && (
          <p className="mt-4 text-sm font-sans tracking-wide text-accent">{message}</p>
        )}
      </div>
    </>
  );
}
