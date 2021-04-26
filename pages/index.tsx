import { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Header from '../src/components/Header'
import Leads from '../src/components/Leads'
import Cursos from '../src/components/Cursos'
import Footer from '../src/components/Footer'

const Home: NextPage = () => (
  <>
    <div className={styles.container}>
      <Head>
        <title>Empreender Com Festas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="../public/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Leads />
      <Cursos />
      <Footer />

    </div>
  </>
)

export default Home
