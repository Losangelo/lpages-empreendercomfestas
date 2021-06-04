import React, { useEffect, useState} from 'react'

import ProductForm from '../../src/products/components/ProductForm'
import ProductItem from '../../src/products/components/ProductItem'
import { SuccessResponderType } from '../../src/products/Interfaces/IProduct'
import { api } from '../../src/services/api'

// {title, description, price, urlImage, whatsappGroupLink, telegramGroupLink
// }
export default function ProductManager () {
  const [products, setProducts] = useState<SuccessResponderType[]>([])

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

    //   return response
    }


    useEffect( () => {

      const loadData = async () => {
        const response = await api.get('/api/product')
        const dados = response.data
        console.log(dados)
        setProducts([dados])

        // const response = await fetch('/api/product')
        // const data = await response.json()
        // console.log('***** fim da LISTANTO O CONTEÚDO DE DATA*****')
        // for await (const doc of data) {
        //   console.log(doc)
        //   setProducts([...products, doc])
        //   // products.push(doc)
        // }
        // // products.reverse()
        console.log(products.length)
      }

      loadData();
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
      </div>
    </>
  )
}
