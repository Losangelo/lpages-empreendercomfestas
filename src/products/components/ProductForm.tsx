import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  Textarea,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center,
  Divider,
  Tooltip,
} from '@chakra-ui/react';

export default function ProductForm({ onSubmit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [urlImage, setUrlImage] = useState('')
  const [whatsappGroupLink, setWhatsappGroupLink] = useState('')
  const [telegramGroupLink, setTelegramGroupLink] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    await onSubmit({
      title,
      description,
      price,
      urlImage,
      whatsappGroupLink,
      telegramGroupLink,
    })

    setTitle('')
    setDescription('')
    setPrice('')
    setUrlImage('')
    setWhatsappGroupLink('')
    setTelegramGroupLink('')
  }

  return (
    <>
      <Center height="110px">
        <Divider orientation="vertical" />
      </Center>

      <Box bg="pink.600" color="whiteAlpha.900" w="100%" p={3} border="1px" borderColor="pink.400">
        <strong>Cadastrar</strong>
      </Box>

      <Box bg="pink.700" w="100%" p={1} color="whiteAlpha.900" border="1px" borderColor="pink.400">
        <form onSubmit={handleSubmit}>
          <FormControl id="title">
            <Tooltip hasArrow label="Qual o nome do seu Produto?" bg="red.600">
              <FormLabel mt={-4}>Título do (Produto/Curso)</FormLabel>
            </Tooltip>
            <Input
              mt={-2}
              name="title"
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* <FormHelperText>Qual o nome do seu Produto?</FormHelperText> */}
          </FormControl>

          <FormControl id="description">
            <Tooltip hasArrow label="Descreva um pouco sobre o seu produto." bg="red.600">
              <FormLabel mt={3}>Descrição curta</FormLabel>
            </Tooltip>
            <Textarea
              mt={-2}
              type="text"
              size="100%"
              class="textarea"
              name="description"
              id="description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {/* <FormHelperText>Descreva um pouco sobre o seu produto.</FormHelperText> */}
          </FormControl>

          <FormControl id="price">
            <Tooltip hasArrow label="Defina um valor!" bg="red.600">
              <FormLabel mt={3}>Valor do Produto</FormLabel>
            </Tooltip>

            <NumberInput
              mt={-2}
              name="price"
              id="price"
              required
              value={price}
              defaultValue={0}
              precision={2}
              step={1}>
              <NumberInputField onChange={(e) => setPrice(e.target.value)} />

              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            {/* <FormHelperText>Defina um valor!</FormHelperText> */}
          </FormControl>

          <FormControl id="urlImage">
            <Tooltip hasArrow label="Insira os arquivos se tiver" bg="red.600">
              <FormLabel mt={3}>Url para o arquivo da Capa</FormLabel>
            </Tooltip>
            <Input
              mt={-2}
              name="urlImage"
              id="urlImage"
              required
              value={urlImage}
              onChange={(e) => setUrlImage(e.target.value)}
            />
            {/* <FormHelperText>Insira os arquivos se tiver</FormHelperText> */}
          </FormControl>

          <FormControl id="whatsappGroupLink">
            <Tooltip hasArrow label="Organize todos em um grupo!" bg="red.600">
              <FormLabel mt={3}>Grupo de Whatsapp</FormLabel>
            </Tooltip>
            <Input
              mt={-2}
              name="whatsappGroupLink"
              id="whatsappGroupLink"
              required
              value={whatsappGroupLink}
              onChange={(e) => setWhatsappGroupLink(e.target.value)}
            />
          </FormControl>

          <FormControl id="telegramGroupLink">
            <Tooltip hasArrow label="Organize todos em um grupo!" bg="red.600">
              <FormLabel mt={3}>Grupo de Telegram</FormLabel>
            </Tooltip>
            <Input
              mt={-2}
              name="telegramGroupLink"
              id="telegramGroupLink"
              required
              value={telegramGroupLink}
              onChange={(e) => setTelegramGroupLink(e.target.value)}
            />
          </FormControl>

          <button type="submit">Salvar</button>
        </form>
      </Box>
    </>
  )
}
