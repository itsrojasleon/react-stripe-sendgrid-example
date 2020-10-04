import mongoose from 'mongoose'

interface MailAttrs {
  to: string
  from: string
  subject: string
  text: string
}

interface MailDoc extends mongoose.Document {
  to: string
  from: string
  subject: string
  text: string
}

interface MailModel extends mongoose.Model<MailDoc> {
  build(attrs: MailAttrs): MailDoc;
}

const mailSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
})

mailSchema.statics.build = (attrs: MailAttrs) => {
  return new Mail(attrs)
}

export const Mail = mongoose.model<MailDoc, MailModel>('Mail', mailSchema)