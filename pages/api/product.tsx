import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../src/middleware/database'

interface ErrorResponseType {
  error: string
}

interface SuccessResponderType {
  _id: string
  title: string
  description: string
  price: number
  urlImage: string
  whatsappGroupLink: string
  telegramGroupLink: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponderType>
): Promise<void> => {
  const { db } = await dbConnect()

  if (req.method == 'POST') {
    const { title, description, number, urlImage, whatsappGroupLink, telegramGroupLink } = req.body
    const productFound = await db.collection('products').findOne({ title })

    if (!productFound) {
      const response = await db.collection('products').insertOne({
        title,
        description,
        number,
        urlImage,
        whatsappGroupLink,
        telegramGroupLink,
      })
      res.status(200).json(response.ops[0])
    } else {
      res.status(400).json({ error: 'exist produto! - email já cadastrado' })
    }
  } else if (req.method == 'GET') {
    const response = await db.collection('products').distinct('title')
    console.log(response)
  } else {
    return res.status(400).json({ error: 'Wrong request method (Método request desconhecido)' })
  }
}
