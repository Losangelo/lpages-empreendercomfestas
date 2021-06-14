import Head from 'next/head'
import { useSession } from 'next-auth/client'

import styles from '../styles/Home.module.css'

import Header from '../src/components/Header'
import Leads from '../src/components/Leads'
import Cursos from '../src/components/Cursos'
import Vitrine from '../src/components/Vitrine'
import Footer from '../src/components/Footer'
import Products from '../src/products/'

function Home() {
  const [session] = useSession()

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Empreender Com Festas</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {/* <link rel="icon" href="../public/favicon.ico" /> */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>

        <Header />

        {!session ? (
          <>
            <Leads />
            <Vitrine />
            <Cursos />
          </>
        ) : (
          <Products />
        )}
        <Footer />
      </div>
    </>
  )
}

export default Home
