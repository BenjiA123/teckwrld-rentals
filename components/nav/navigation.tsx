import Link from "next/link"
import { FunctionComponent } from "react"
import styles from './Navigation.module.css'
import Image from 'next/image'

const NavigationComponent:FunctionComponent = ()=>{

    return (
        <div>
            <>
            <div className={styles.navigation}>
                {/* <Link href='/'> */}
                    <Image alt="Just a test" src='/favicon.ico' width="30px" height="30px"/>
                {/* </Link> */}
                <div className={styles.nav_items}>

                {/* <Link href='/cars'> */}
                <a >Luxury</a>
                {/* </Link> */}
                {/* <Link href='/cars'> */}
                <a >Budget</a>
                {/* </Link> */}
                {/* <Link href='/cars'> */}
                <a >Our Cars</a>
                {/* </Link> */}
                </div>
                <div className={styles.registration}> 
                {/* <Link href='/cars'> */}
                <a >Login</a>
                {/* </Link> */}
                {/* <Link href='/cars'> */}
                <a >Register</a>
                {/* </Link> */}
                </div>
            </div>
            </>
        </div>
    )
}

export default NavigationComponent