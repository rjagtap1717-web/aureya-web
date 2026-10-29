import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_mock',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'rzp_secret_mock',
});

const PRICES = {
  'variant-b': 1499, // 60 Capsules - 1499 INR
};

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const variant = body?.variant || 'variant-b';

    // Single product: 60 Capsules at 1,499 INR
    const amount = 1499 * 100; // Razorpay expects amount in paise

    const options = {
      amount,
      currency: 'INR',
      receipt: `receipt_order_${Math.floor(Math.random() * 100000)}`,
      payment_capture: 1,
    };

    // Attempt to create order, mock if key is invalid
    try {
      const order = await razorpay.orders.create(options);
      return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency });
    } catch (apiError: any) {
      // Mock fallback for development if keys aren't set
      if (apiError.statusCode === 401) {
        return NextResponse.json({ 
          orderId: `order_mock_${Date.now()}`, 
          amount, 
          currency: 'INR',
          mock: true 
        });
      }
      throw apiError;
    }
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
