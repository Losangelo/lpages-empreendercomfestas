import mongoose from 'mongoose'

const WhatsLeadSchema = new mongoose.Schema({
  whatsName: {
    type: String,
    required: [true, 'O nome é requerido!'],
    trim: true,
  },
  whatsNumber: {
    type: String,
    required: [true, 'Um número do celular valido é requerido!'],
    trim: true,
  },
  createdAt: { type: Date, default: Date.now },
})

mongoose.models = {}

export default mongoose.model('WhatsLead', WhatsLeadSchema)
