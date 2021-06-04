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

      <Box bg="pink.600" color="whiteAlpha.900" w="100%" p={4}>
        <strong>Cadastrar</strong>
      </Box>

      <Box bg="pink.700" w="100%" p={2} color="whiteAlpha.900">
        <form onSubmit={handleSubmit}>
          <FormControl id="title">
            <FormLabel>Título do (Produto/Curso)</FormLabel>
            <Input
              name="title"
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormHelperText>Qual o nome do seu Produto?</FormHelperText>
          </FormControl>

          <FormControl id="description">
            <FormLabel>Descrição curta</FormLabel>
            <Textarea
              type="text"
              size="100%"
              class="textarea"
              name="description"
              id="description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormHelperText>Descreva um pouco sobre o seu produto.</FormHelperText>
          </FormControl>

          <FormControl id="price">
            <FormLabel>Valor do Produto</FormLabel>
            <NumberInput
              name="price"
              id="price"
              required
              value={price}
              defaultValue={0}
              precision={2}
              step={0.2}
             >

              <NumberInputField onChange={(e) => setPrice(e.target.value)} />

              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText>Defina um valor!</FormHelperText>
          </FormControl>

          <FormControl id="urlImage">
            <FormLabel>Url para o arquivo da Capa</FormLabel>
            <Input
              name="urlImage"
              id="urlImage"
              required
              value={urlImage}
              onChange={(e) => setUrlImage(e.target.value)}
            />
            <FormHelperText>Insira os arquivos se tiver</FormHelperText>
          </FormControl>

          <FormControl id="whatsappGroupLink">
            <FormLabel>Grupo de Whatsapp</FormLabel>
            <Input
              name="whatsappGroupLink"
              id="whatsappGroupLink"
              required
              value={whatsappGroupLink}
              onChange={(e) => setWhatsappGroupLink(e.target.value)}
            />
            <FormHelperText>Organize todos em um grupo!</FormHelperText>
          </FormControl>

          <FormControl id="telegramGroupLink">
            <FormLabel>Grupo de Telegram</FormLabel>
            <Input
              name="telegramGroupLink"
              id="telegramGroupLink"
              required
              value={telegramGroupLink}
              onChange={(e) => setTelegramGroupLink(e.target.value)}
            />
            <FormHelperText>Organize todos em um grupo!</FormHelperText>
          </FormControl>

          <button type="submit">Salvar</button>
        </form>
      </Box>
    </>
  )
}
