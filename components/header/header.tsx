import Link from "next/link"
import { FunctionComponent } from "react"
import Image from 'next/image'
import styles from './Header.module.css'

const HeaderComponent:FunctionComponent = ()=>{

    const videoRef = './FREE CLIP HD FOOTAGE - Calm Water Surface (Link In Description).mp4'
    return (
        <div>
            <>
            {/* <video className={styles.video}
            // ref={videoRef}
            src="./headerVideo.mp4"
            controls
            width="100%"
            loop
            >
       </video> */}
            <div className={styles.slider}>

                <h1 className={styles.intro_text}>TeckWrld Rentals, <span className={styles.intro_text_description}>where any car is just a call away</span></h1>
                <div className={styles.cta_items}>
                    <input placeholder="Where are you ?"/>
                    <Link href='/'>
                        Get A Car
                    </Link>
                    
                </div>
            </div>
            </>
        </div>
    )
}

export default HeaderComponent