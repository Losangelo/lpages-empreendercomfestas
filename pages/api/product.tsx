// import React from 'react'
import { useState } from 'react';
// import { api } from '../../src/services/api'
import { NextApiRequest, NextApiResponse } from 'next'

import '../../src/products/model/Product';
import dbConnect from '../../src/middleware/database'

import {ErrorResponseType, SuccessResponderType} from '../../src/products/Interfaces/IProduct'

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponderType | any>
): Promise<void> => {

  const { db } = await dbConnect()
  // const [products, setProducts] = useState([])

  if (req.method == 'POST') {
      const { title, description, price, urlImage, whatsappGroupLink, telegramGroupLink } = req.body
      // console.log('=============> Conteúdo de req.body <============')
      // console.log(req.body)
      // console.log('=============> Conteúdo de req.body fianl <============')
      const productFound = await db.collection('products').findOne({ title })

      if (!productFound) {
        // console.log('*******valor das variaveis antes ************')
        // console.log({ title })

        const response = await db.collection('products').insertOne({
          title,
          description,
          price,
          urlImage,
          whatsappGroupLink,
          telegramGroupLink,
        })
        // console.log('*******valor das variaveis DEPOIS ************')
        // console.log({ title })

        // console.log('*******Retrono do Save ************')
        res.status(200).json(response.ops[0])
        // console.log('*******Retrono do Save ************')
      }
      // res.status(200).json({success: 'ok'})

    }else if (req.method == 'GET'){
      const response = db.collection('products').find()
      const data = []

      console.log('*******LISTANDO OS DOCUMENTOS************')
      for await (const doc of response) {
        console.log(doc)
        data.push(doc)
      }
      console.log('*******FIM DE LISTAGEM DE DOCUMENTOS************')

      res.status(200).json({data})
    } else {
    res.status(400).json({ error: 'Wrong request method (Método request desconhecido)' })
  }
}
