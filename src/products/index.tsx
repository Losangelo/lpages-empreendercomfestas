import React, { useState, useEffect } from 'react'
import ProductForm from './components/ProductForm'
import ProductItem from './components/ProductItem'

import './model/Product'
import dbConnect from '../middleware/database'

async function ProductManager (_props: any) {
  const [products, setProducts] = useState([])
  const { db } = await dbConnect()

  useEffect(() => {
    async function loadProducts() {
      const response = await fetch('/api/product')
      // db.collection('products').find()
      console.log(response.data)
      setProducts(response.data)
    }
    loadProducts()
  }, [])

  async function handleAddProduct(data) {
    const response = await fetch('/api/products', {
      body: JSON.stringify({
        title: e.target.title.value,
        description: e.target.description.value,
        number: e.target.number.value,
        urlImage: e.target.urlImage.value,
        whatsappGroupLink: e.target.whatsappGroupLink.value,
        telegramGroupLink: e.target.telegramGroupLink.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    setProducts([...products, response.data])
  }

  return (
    <>
      <div id="product">
        <aside>
          <strong>Cadastrar</strong>
          <ProductForm onSubmit={handleAddProduct} />
        </aside>

        <main>
          <ul>
            {products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
          </ul>
        </main>
      </div>
    </>
  )
}

export default ProductManager
