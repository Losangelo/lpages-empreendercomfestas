import '../styles/globals.css'
import '../src/products/styles/main.css'
import '../src/products/styles/sidebar.css'
// import '../src/products/styles/productItem.css'

import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
)

export default MyApp
