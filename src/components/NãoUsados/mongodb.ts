import * as mongoose from 'mongoose'

const connectDB = handler => async (req, res) => {
  // if (mongoose.connections[0].readyState) {
  //   // Use current db connection
  //   return handler(req, res);
  // }
  if (!process.env.MONGODB_URI) {
    console.log('>>>[Sem Variavel ambiente !!!!!]')
    res
      .status(422)
      .send('>>>[>>>[Sem Variavel ambiente !!!!!] - Dados Incompletos]')
  } else {
    console.table(process.env.MONGODB_URI)
  }

  try {
    await mongoose.connect(
      process.env.MONGODB_URI,
      {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true,
      },
      () => console.log('>>>>>>>>>>>[conectado!!]')
    )
  } catch (error) {
    console.log('>>>>>>>>>>>[could not connect - não conseguiu conectar!!]')
    return res.status(442).send(error.message)
  }
  return handler(req, res)
}

export default connectDB
