import mongoose from 'mongoose'
import {TicketDoc} from './ticket'

interface OrderAttrs {
  ticket: TicketDoc
}

interface OrderDoc extends mongoose.Document {
  ticket: TicketDoc
  completed: boolean
}

interface OrderModel extends mongoose.Model<OrderDoc> {
  build(attrs: OrderAttrs): OrderDoc;
}

const ticketSchema = new mongoose.Schema({
  ticket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket'
  },
  completed: {
    type: Boolean,
  }
})

ticketSchema.statics.build = (attrs: OrderAttrs) => {
  return new Order(attrs)
}

export const Order = mongoose.model<OrderDoc, OrderModel>('Order', ticketSchema)