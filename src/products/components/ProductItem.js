import {Box, Spacer, Text, Link, Image, Center, Divider, Grid} from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaWhatsapp, FaTelegram } from 'react-icons/fa'

export default function ProductItem({ product }) {
  return (
    <>
      <Grid border="1px" borderColor="pink.400">
        <li id="liProductsItens">
          <Box
            overflow="hidden"
            bg="pink.100"
            color="whiteAlpha.800"
            p={1}
            display={{ md: 'flex' }}>
            <Box flexShrink={0}>
              <Image
                borderRadius="md"
                width={{ md: 40 }}
                height={{ md: 40 }}
                src={product.urlImage}
                fallbackSrc="https://via.placeholder.com/150"
                alt="Luciana Ferreira"
              />
            </Box>

            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="sm"
                letterSpacing="wide"
                color="pink.600">
                <Center>{product.title}</Center>
              </Text>
              <Text mt={2} color="pink.700" noOfLines={[1, 2, 3]}>
                Valor: R$ {product.price}
              </Text>
              <Text
                mt={2}
                color="gray.700"
                noOfLines={[1, 2, 3]}
                fontSize="xs"
                letterSpacing="wide">
                {product.description}
              </Text>
            </Box>
          </Box>

          <Box
            bg="pink.700"
            w="100%"
            h="32px"
            p={1}
            alignItems="center"
            overflow="hidden"
            borderWidth="1px"
            display={{ md: 'flex flex-row' }}>
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
              <Box mt={-3} w="100%" h="10">
                <Link
                  display="block"
                  fontSize="md"
                  lineHeight="normal"
                  fontWeight="semibold"
                  href={product.whatsappGroupLink}>
                  <FaWhatsapp size={20} color="#00fa9a" />
                </Link>
              </Box>
              <Box mt={-3} w="100%" h="10">
                <Link
                  display="block"
                  fontSize="md"
                  lineHeight="normal"
                  fontWeight="semibold"
                  href={product.telegramGroupLink}>
                  <FaTelegram size={20} color="#0066cc" />
                </Link>
              </Box>
            </Grid>
          </Box>
        </li>
        {/* <Spacer /> */}
      </Grid>
    </>
  )
}
