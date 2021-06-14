import { Box, Image, SimpleGrid, useMediaQuery } from '@chakra-ui/react';
import React from 'react'

const dbVitrineList = [
  {
    Id: 1,
    urlImage: '/assets/vitrine/vitrine1.jpeg',
    Description: 'vitrine1.',
  },
  {
    Id: 2,
    urlImage: '/assets/vitrine/vitrine2.jpeg',
    Description: 'vitrine2.',
  },
  {
    Id: 3,
    urlImage: '/assets/vitrine/vitrine3.jpeg',
    Description: 'vitrine3.',
  },
  {
    Id: 4,
    urlImage: '/assets/vitrine/vitrine4.jpeg',
    Description: 'vitrine4.',
  },
  {
    Id: 5,
    urlImage: '/assets/vitrine/vitrine5.jpeg',
    Description: 'vitrine5.',
  },
  {
    Id: 6,
    urlImage: '/assets/vitrine/vitrine6.jpeg',
    Description: 'vitrine6.',
  },
  {
    Id: 7,
    urlImage: '/assets/vitrine/vitrine7.jpeg',
    Description: 'vitrine7.',
  },
  {
    Id: 8,
    urlImage: '/assets/vitrine/vitrine8.jpeg',
    Description: 'vitrine8.',
  },
  {
    Id: 9,
    urlImage: '/assets/vitrine/vitrine9.jpeg',
    Description: 'vitrine9.',
  },
  {
    Id: 10,
    urlImage: '/assets/vitrine/vitrine10.jpeg',
    Description: 'vitrine10.',
  },
  {
    Id: 11,
    urlImage: '/assets/vitrine/vitrine11.jpeg',
    Description: 'vitrine11.',
  },
]

export default function Vitrine(): any {
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)')
  const W = {isLargerThan640} ? "100%" : "200"

  const VitrineCard = dbVitrineList.map((item) => (
          <Box h={200} w={W} py="2">
            <Image
              key={item.Id}
              src={item.urlImage}
              alt="Personalizado de Luxo Luciana Fereira"
              h="200"
              w="100%"
            />
            <h1 className="article-title"></h1>
          </Box>
        ));

  return (
    <>
      <section className="leading">
        <div>
          <h1 className="p-10 text-5xl font-extrabold font-sans text-center align-middle justify-center justify-items-center">
            HISTÓRIAS QUE INSPIRAM
          </h1>
          <p className="leading-text">
            Nosso último evento foi um sucesso, temos o prazer de ter várias de nossas alunas
            trabalando na área depois do evento e outras se divertindo com as festas familiares.
          </p>
        </div>
        {/* <p className="leading-bigtext"> HISTÓRIAS QUE INSPIRAM</p>
        <p className="leading-text">
          Nosso ultimo evento foi um sucesso, temos o prazer de ter várias de nossas alunas
          trabalando na área depois do evento e outras se divertindo com as festas familiares.
        </p> */}
      </section>

      <SimpleGrid columns={[1, null, 4]} spacing="15px" className="bg-red-100" my-20 h="100%">
        {VitrineCard}
      </SimpleGrid>
      <Box bg="bg-red-100" />
    </>
  )}
