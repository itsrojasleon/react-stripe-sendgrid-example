import express, { Request, Response } from 'express';
import { stripe } from '../services/stripe';
import { Payment } from '../models/payment';
import { Order } from '../models/order';

const router = express.Router();

router.get('/api/payments', async (req: Request, res: Response) => {
  const payments = await Payment.find({});

  res.send(payments);
});

router.post('/api/payments', async (req: Request, res: Response) => {
  const { token, orderId } = req.body;

  const order = await Order.findById(orderId).populate('ticket');

  console.log(order);

  if (!order) {
    throw new Error('order not found!');
  }

  const charge = await stripe.charges.create({
    currency: 'usd',
    amount: Number(order.ticket.price) * 100,
    source: token,
  });

  const payment = Payment.build({
    orderId,
    stripeId: charge.id,
  });

  // Save payment in database
  await payment.save();

  res.send(payment);
});

export { router as paymentsRouter };
