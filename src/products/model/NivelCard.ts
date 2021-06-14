import mongoose from 'mongoose'

// Id: 4,
// Title: ' Viver de Festas',
// urlImage: '/assets/logo.png',
// price: '497',
// Description:
const NivelCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'O título é requerido!'],
    trim: true,
  },
  urlImage: {
    type: String,
    required: [true, 'Um camilho válido é requerido!'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Uma descrição se faz necessária!'],
    trim: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

mongoose.models = {}

export default mongoose.model('NivelCard', NivelCardSchema)
