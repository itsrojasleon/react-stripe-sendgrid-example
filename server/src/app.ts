import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { ticketsRouter } from './routes/tickets';
import { ordersRouter } from './routes/orders';
import { paymentsRouter } from './routes/payments';
import { mailsRouter } from './routes/mails';

const app = express();

app.use(cors());
app.use(json());

app.use(ticketsRouter);
app.use(ordersRouter);
app.use(paymentsRouter);
app.use(mailsRouter);

// mongodb://<dbuser>:<dbpassword>@ds119489.mlab.com:19489/react-stripe-sendgrid-test
export { app };
