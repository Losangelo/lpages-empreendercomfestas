import React from 'react'
import { NextPage } from 'next'
import { Center, Button, Box, Divider, Stack } from '@chakra-ui/react'
import { MdBuild, MdCall } from 'react-icons/md'
import { FiArrowLeft } from 'react-icons/fi'

import ProductForm from './components/ProductForm'

const Products: NextPage = () => (
  <>
    <Center height="110px">
      <Divider orientation="vertical" />
    </Center>

    <Box bg="tomato" w="100%" p={4} color="white">
      <a href="#">
        <FiArrowLeft />
      </a>
      Manutenção de Produtos
    </Box>

    <aside>
      <ProductForm />
    </aside>
    <main></main>
  </>
)

export default Products
