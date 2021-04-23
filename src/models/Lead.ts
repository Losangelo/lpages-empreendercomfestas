import mongoose from 'mongoose'

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O nome é requerido!'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Um email valido é requerido!'],
    trim: true,
  },
  since: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
})

mongoose.models = {}

export default mongoose.model('Lead', LeadSchema)
