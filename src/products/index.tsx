import React, { useEffect, useState} from 'react'
import ProductForm from './components/ProductForm'
import ProductItem from './components/ProductItem'
import { api } from '../services/api'


// {title, description, price, urlImage, whatsappGroupLink, telegramGroupLink
// }

// https://next-auth.js.org/providers/google
// if (
//   account.provider === 'google' &&
//   profile.verified_email === true &&
//   profile.email.endsWith('@example.com')
// ) {
//   return true
// } else {
//   return false
// }

export default function ProductManager() {
  const [products, setProducts] = useState([])

  async function handleAddProduct(data) {
    const response = api.post('/api/product', data)
    setProducts([...products, (await response).data])

    // const response = await fetch('/api/product', {
    //   body: JSON.stringify({data}),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    // })
    //   .then((doc) => doc.json())
    //   .then((data) => {
    //     setProducts([...products, data])
    //     console.log('***SETPRODUCT AUTALIZADO***')
    //     console.log(products)
    //   })

    // console.log("---------Inicio-------------------")
    // console.log(response)
    // console.log('---------Fim   -------------------')

    return (await response).data
  }

  useEffect(() => {
    const loadData = async () => {
      // const response = await api.get('/api/product')
      // const dados = await response.data

      // console.log('-------DADOS--------------------------')
      // console.log(dados)
      // console.log('-------------------------------------')

      // setProducts(dados)

      // console.log(dados)
      // setProducts([dados])

      const response = await fetch('/api/product')
      const data = await response.json()
      // products.push([...products, data.data])

      console.log('***** fim da LISTANTO O CONTEÚDO DE DATA*****')

      // products.reverse()
      setProducts(data.data)

      // Ok está passando veja o teste
      // console.log('-------------------------------------')
      // console.log(data.data.length)
      // console.log(products)
      // console.log(data.data)
      // console.log('-------------------------------------')
    }

    loadData()
  }, [])

  return (
    <>
      <div id="product" className="flex flex-row">
        <aside>
          <ProductForm onSubmit={handleAddProduct} />
        </aside>

        <main>
          <ul>
            {products.map((p) => (
              <ProductItem key={p._id} product={p} />
            ))}
          </ul>
        </main>
        {/* <Google /> */}
      </div>
    </>
  )
}
