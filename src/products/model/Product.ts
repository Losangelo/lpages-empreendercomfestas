import mongoose from 'mongoose'

// Id: 4,
// Title: ' Viver de Festas',
// urlImage: '/assets/logo.png',
// price: '497',
// Description:
const ProductSchema = new mongoose.Schema({
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
  price: {
    type: String,
    // required: [true, 'Um preço válido é requerido!'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Uma descrição se faz necessária!'],
    trim: true,
  },
  whatsappGroupLink: {
    type: String,
    trim: true,
  },
  telegramGroupLink: {
    type: String,
    trim: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

mongoose.models = {}

export default mongoose.model('Product', ProductSchema)
