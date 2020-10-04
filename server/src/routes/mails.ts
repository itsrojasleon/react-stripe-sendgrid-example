import express, { Request, Response } from 'express';
import { sgMail } from '../services/send-grid';
import { Mail } from '../models/mail';

const router = express.Router();

router.get('/api/mails', async (req: Request, res: Response) => {
  const mails = await Mail.find({});

  res.send(mails);
});

router.post('/api/mails', async (req: Request, res: Response) => {
  const { to, subject, text } = req.body;

  const msg = {
    to,
    from: 'luisrojasleon5@gmail.com',
    subject,
    text,
  };

  const mail = Mail.build({
    ...msg,
  });

  try {
    // Save mail in database
    await mail.save();

    // Send email to user
    await sgMail.send(msg);
  } catch (err) {
    console.error(err);

    if (err.response) {
      console.error(err.response.body);
    }
  }

  res.send(mail);
});

export { router as mailsRouter };
