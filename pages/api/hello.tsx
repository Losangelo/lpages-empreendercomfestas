// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {reques} = req.body;
  {reques ? '' :''}
  res.status(200).json({ name: 'Losangelo Pacífico' })
}
