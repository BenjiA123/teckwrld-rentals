import Link from "next/link";
import { FunctionComponent, useContext } from "react";
import styles from "./Navigation.module.css";
import Image from "next/image";
import AuthContext from "../../contexts/AuthProvider";

const NavigationComponent: FunctionComponent = () => {
  const { authState, setAuthState }: any = useContext(AuthContext);

  return (
    <>
      <nav className={styles.navigation}>
        <Link href="/" passHref>
          {/* <> */}
          <a>
            <Image
              alt="Just a test"
              src="/favicon.ico"
              width="30px"
              height="30px"
            />
          </a>
          {/* </> */}
        </Link>
        <div className={styles.nav_items}>
          <Link href="/cars">CARS</Link>
        </div>

        <div className={styles.registration}>
          {authState ? (
            <>
              <Link href="/auth/signin">Login</Link>
            </>
          ) : (
            <Link href="/auth/register">Register</Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavigationComponent;
