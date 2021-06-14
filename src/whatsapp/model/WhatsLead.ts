import mongoose from 'mongoose'

const WhatsLeadSchema = new mongoose.Schema({
  whatsName: String,
  whatsNumber: String,
  createdAt: { type: Date, default: Date.now },
})

mongoose.models = {}

export default mongoose.model('WhatsLead', WhatsLeadSchema)
