import {
  Box,
  Spacer,
  Text,
  Link,
  Image,
  Center,
  Divider,
  Grid,
  useDisclosure,
  Slide,
  SlideFade,
  Button,
} from '@chakra-ui/react'

// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaWhatsapp, FaTelegram } from 'react-icons/fa'

export default function ProductItem({ product }) {
  const { isOpen, onToggle } = useDisclosure()

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
            <Box flexShrink={0} md={48}>
              <Image
                onClick={onToggle}
                borderRadius="md"
                width={{ md: 40 }}
                height={{ md: 40 }}
                src={product.urlImage}
                fallbackSrc="https://via.placeholder.com/150"
                alt="Luciana Ferreira"
              />

              <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
                <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
                  <Text>
                    <Center>{product.title}</Center>
                    Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt
                    aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia
                    cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Sunt ad dolore
                    quis aute consequat. Magna exercitation reprehenderit magna aute tempor
                    cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                    incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
                    do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
                    pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </Text>
                </Box>
              </Slide>
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
                  href={product.whatsappGroupLink}
                  isExternal>
                  <FaWhatsapp size={20} color="#00fa9a" />
                </Link>
              </Box>
              <Box mt={-3} w="100%" h="10">
                <Link
                  display="block"
                  fontSize="md"
                  lineHeight="normal"
                  fontWeight="semibold"
                  href={product.telegramGroupLink}
                  isExternal>
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
