import mongoose from 'mongoose'

interface TicketAttrs {
  title: string
  price: number
}

export interface TicketDoc extends mongoose.Document {
  title: string;
  price: string;
}

interface TicketModel extends mongoose.Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
}

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

ticketSchema.statics.build = (attrs: TicketAttrs) => {
  return new Ticket(attrs)
}

export const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema)