import Link from "next/link"
import { FunctionComponent, useContext } from "react"
import styles from './Navigation.module.css'
import Image from 'next/image'
import AuthContext from "../../contexts/AuthProvider"

const NavigationComponent:FunctionComponent = ()=>{

    const {authState, setAuthState}:any = useContext(AuthContext)

    return (
        <div>
            <>
            <div className={styles.navigation}>
                {/* <Link href='/'> */}
                    <Image alt="Just a test" src='/favicon.ico' width="30px" height="30px"/>
                {/* </Link> */}
                <div className={styles.nav_items}>

                <Link href='/cars'>
                Luxury
                </Link>
                <Link href='/cars'>
                Budget
                </Link>
                </div>
                
                <div className={styles.registration}> 
               { authState?
               <>
               
               <Link href='/auth/signin'>
                Login
                </Link>
                <Link href='/auth/register'>
                Register
                </Link>
               </>
               : null
                }
                </div>
            </div>
            </>
        </div>
    )
}

export default NavigationComponent