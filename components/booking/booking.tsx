import Link from "next/link"
import { FunctionComponent } from "react"
import styles from './Booking.module.css'
import Image from 'next/image'

const BookingComponent:FunctionComponent = ()=>{

    return (
        <div>
            <>
            <section className={styles.booking}>
                <div className="">
                    <span>Book Date</span><br />
               <input type="text" />
                </div>
               <div className="">
                <span>Book Date</span><br />
               <input type="text" />
               </div>
               <div className="">
                <span>Book Date</span><br />
               <input type="text" />
               </div>
               <div className="">
                <span>Book Date</span><br />
               <input type="text" />
               </div>
               <div className="">
                <span>Book Date</span><br />
               <input type="text" />
               </div>
            </section>
            </>
        </div>
    )
}

export default BookingComponent