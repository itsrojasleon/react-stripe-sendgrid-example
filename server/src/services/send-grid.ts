import sgMail from '@sendgrid/mail';
import { config } from '../config/dev';

sgMail.setApiKey(config.SENDGRID_API_KEY);

export { sgMail };
