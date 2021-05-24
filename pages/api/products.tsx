import React, { useState, useEffect } from 'react'
import api from '../../src/services/api'

const [product, setProduct] = useState([])

interface Iproducts {
  title: string
  description: string
  price: number
  urlImage: string
  whatsappGroupLink: string
  telegramGroupLink: string
}

useEffect(() => {
  async function loadProducts() {
    const response = await api.get('/products')
    setProduct(response.data)
  }
  loadProducts()
}, [])



function App() {
  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
    }

    loadDevs()
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map((dev) => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
