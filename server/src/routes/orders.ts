import express, { Request, Response } from 'express';
import { Order } from '../models/order';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/orders', async (req: Request, res: Response) => {
  const orders = await Order.find({}).populate('ticket');

  res.send(orders);
});

router.get('/api/orders/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const order = await Order.findById(id).populate('ticket');

  res.send(order);
});

router.post('/api/orders', async (req: Request, res: Response) => {
  const { ticketId } = req.body;

  const ticket = await Ticket.findById(ticketId);

  if (!ticket) {
    throw new Error('ticket not found!');
  }

  const order = Order.build({
    ticket,
  });

  // Save order in database
  await order.save();

  res.send(order);
});

export { router as ordersRouter };
