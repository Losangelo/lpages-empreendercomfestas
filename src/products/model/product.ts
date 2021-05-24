import mongoose from 'mongoose'
const PointSchema = require('./utils/PointSchema');

// Id: 4,
// Title: ' Viver de Festas',
// urlImage: '/assets/logo.png',
// price: '497',
// Description:
const ProductSchema = new mongoose.Schema({
  Title: {
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
    type: Number,
    required: [true, 'Um preço válido é requerido!'],
    trim: true,
  },
  Description: {
    type: String,
    required: [true, 'Uma descrição se faz necessária!'],
    trim: true,
  },
  SocialNetwork: {
    type: String,
    required: [true, 'Uma descrição se faz necessária!'],
    trim: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

// mongoose.models = {}

export default mongoose.model('Product', ProductSchema)
