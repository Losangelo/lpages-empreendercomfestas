import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../src/middleware/database'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
interface ErrorResponseType {
  error: string
}
interface SuccessResponderType {
  _id: string
  name: string
  email: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType  | SuccessResponderType>
): Promise<void> => {
  const { db } = await dbConnect();

  if (req.method == 'POST') {
    const { name, email } = req.body
    const leadFound = await db.collection('leads').findOne({email})

    if (!leadFound){
      const response = await db.collection('leads').insertOne({
        name,
        email
      })
      res.status(200).json(response.ops[0])
    }else {
      res.status(400).json({ error: 'exist email! - email já cadastrado'})
    }

  } else if (req.method == 'GET') {
     const response = await db.collection('leads').distinct('email')
     console.log(response)
   } else {
    return res
      .status(400)
      .json({ error: 'Wrong request method (Método request desconhecido)' })
  }
}
