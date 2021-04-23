import { NextApiRequest, NextApiResponse } from 'next'
import { toast } from 'react-toastify'
import dbConnect from '../../src/middleware/database'

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
  const { db } = await dbConnect()

  if (req.method == 'POST') {
    const { name, email } = req.body

    if (!name) {
      return res.status(400).json({ error: 'Como devo lhe chamar?' })
    }

    function isEmail(email) {
      return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
        email
      )
    }
    if (!isEmail(email)) {
      return res.status(400).json({
        error:
          'Digite aqui um email válido, de preferência o que você verifica com frequência!',
      })
    }

    const response = await db.collection('leads').insertOne({
      name,
      email
    })
    res.status(200).json(response.ops[0])

  } else {
    return res
      .status(400)
      .json({ error: 'Wrong request method (Método request desconhecido)' })
  }
}
