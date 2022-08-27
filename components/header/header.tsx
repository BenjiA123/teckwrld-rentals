import Link from "next/link";
import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const HeaderComponent: FunctionComponent = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.slider}>
          <div className={styles.intro_text}>
            <h1 className="animate__animated animate__pulse">
              TeckWrld Rentals,
            </h1>
            <div className={styles.intro_text_description}>
              where any car is just a call away
            </div>
          </div>
          <div className={styles.cta_items}>
            <span className="fa fa-map-marker"></span>
            <input placeholder="Where are you ?" />
            <Link href="/">Get A Car</Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
