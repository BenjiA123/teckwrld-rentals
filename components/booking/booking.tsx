import Link from "next/link"
import { FunctionComponent } from "react"
import styles from './Booking.module.css'
import Image from 'next/image'

const BookingComponent:FunctionComponent = ()=>{

    return (
        <div>
            <>
            <section  className={styles.booking_section}>
            <h2 className={styles.booking_header}>BOOK A TICKET NOW</h2>

            <div className={styles.booking}>
                
               <div className={styles.booking_form}>
               <div className="">
                    <span>Book Date</span><br />
               <input type="text" />
                </div>
               <div className="">
                <span>Return Date</span><br />
               <input type="date" />
               </div>
               <div className="">
                <span>Book Date</span><br />
               <input type="text" />
               </div>
               <div className="">
                <span>Book Date</span><br />
               <input type="date" />
               </div>
               <div className="">
                <span>Select Category</span><br />
               <select name="" id="">
                <option value="">Luxury</option>
                <option value="">Mid-Class</option>
                <option value="">Budget</option>
               </select>
               </div>
               <div className="">
               <button className={styles.getCar} > Get A Car</button>
               </div>
               </div>
               <div className={styles.booking_info}>
                
                <h2>Use Our Fast And Reliable Service and Get Served In Minutes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, 
                    fugit odio, sunt voluptas quisquam saepe itaque sequi a. Iusto.</p>
               </div>
            </div>
            </section>
            </>
        </div>
    )
}

export default BookingComponent