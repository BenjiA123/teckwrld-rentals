import type { NextPage } from 'next'
import Head from 'next/head'
import FooterComponent from '../components/footer'
import styles from '../styles/Home.module.css'
import NavigationComponent from '../components/nav/navigation'
import HeaderComponent from '../components/header/header'
import CarPreviewComponent from '../components/car-preview/car-preview'
import BookingComponent from '../components/booking/booking'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TeckWrld Rentals</title>
        <meta name="description" content="A premium Car Rental Company" />
        <link rel="icon" href="/favicon.ico" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;1,100;1,400&display=swap" rel="stylesheet"></link>


      </Head>
      <NavigationComponent/>
      <HeaderComponent/>
      <CarPreviewComponent />
      <CarPreviewComponent />
      <BookingComponent/>


      <FooterComponent/>
     
    </div>
  )
}

export default Home
