import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeaderComponent from "../components/header/header";
import CarPreviewComponent from "../components/car-preview/car-preview";
import BookingComponent from "../components/booking/booking";
import ChartComponent from "../components/chart/chart";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TeckWrld Rentals</title>
        <meta name="description" content="A premium Car Rental Company" />

        <link rel="canonical" href="https://www.rental-teckwrld.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent />
      <CarPreviewComponent type="BUDGET" />
      <CarPreviewComponent type="LUXURY" />
      <BookingComponent />
      <ChartComponent />
    </div>
  );
};

export default Home;
