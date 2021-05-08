import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../src/middleware/database'

interface ErrorResponseType {
  error: string
}

interface SuccessResponderType {
  _id: string
  whatsName: string
  whatsNumber: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponderType>
): Promise<void> => {
  const { db } = await dbConnect()

  if (req.method == 'POST') {
    const { whatsName, whatsNumber } = req.body
    const whatsLeadFound = await db.collection('WhatsLead').findOne({ whatsNumber })

    if (!whatsLeadFound) {
      const response = await db.collection('WhatsLead').insertOne({
        whatsName,
        whatsNumber,
      })
      res.status(200).json(response.ops[0])
    } else {
      res
        .status(400)
        .json({ error: 'this email is already registered! (este email já está cadastrado)' })
    }
  } else if (req.method == 'GET') {
    const response = await db.collection('WhatsLead').distinct('whatsNumber')
    console.log(response)
  } else {
    return res.status(400).json({ error: 'Wrong request method (Método request desconhecido)' })
  }
}
