import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets', async (req: Request, res: Response) => {
  const tickets = await Ticket.find({});

  res.send(tickets);
});

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const ticket = await Ticket.findById(id);

  res.send(ticket);
});

router.post('/api/tickets', async (req: Request, res: Response) => {
  const { title, price } = req.body;

  const ticket = Ticket.build({
    title,
    price,
  });

  // Save ticket in database
  await ticket.save();

  res.send(ticket);
});

export { router as ticketsRouter };
