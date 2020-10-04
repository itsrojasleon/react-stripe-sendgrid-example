import mongoose from 'mongoose'

interface PaymentAttrs {
  orderId: string;
  stripeId: string
}

interface PaymentDoc extends mongoose.Document {
  orderId: string;
  stripeId: string
}

interface PaymentModel extends mongoose.Model<PaymentDoc> {
  build(attrs: PaymentAttrs): PaymentDoc;
}

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true
  },
  stripeId: {
    type: String,
    required: true
  }
})

paymentSchema.statics.build = (attrs: PaymentAttrs) => {
  return new Payment(attrs)
}

export const Payment = mongoose.model<PaymentDoc, PaymentModel>('Payment', paymentSchema)