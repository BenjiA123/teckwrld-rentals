import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./Booking.module.css";
import Image from "next/image";
import React from "react";

class BookingComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      bookDate: "",
      returnDate: "",
      carCategory: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: any) {
    console.log(this.state);
    event.preventDefault();
  }
  render(): React.ReactNode {
    return (
      <>
        <section className={styles.booking_section}>
          <h2 className={styles.booking_header}>BOOK A TICKET NOW</h2>

          <div className={styles.booking}>
            <form onSubmit={this.handleSubmit}>
              <div className={styles.booking_form}>
                <div className="">
                  <span>Name</span>
                  <br />
                  <input placeholder="Name" type="text" />
                </div>
                <div className="">
                  <span>Book Date</span>
                  <br />
                  <input placeholder="Book Date" type="date" />
                </div>
                <div className="">
                  {/* Allows you to book anywhere without Loggin in */}
                  <span>Bookers ID</span>
                  <br />
                  <input placeholder="Booker's Id" type="text" />
                </div>
                <div className="">
                  <span>Return Date</span>
                  <br />
                  <input placeholder="Return Date" type="date" />
                </div>
                <div className="">
                  <span>Select Category</span>
                  <br />
                  <select name="" id="">
                    <option value="">Luxury</option>
                    <option value="">Mid-Class</option>
                    <option value="">Budget</option>
                  </select>
                </div>
                {/* <div className=""> */}
                {/* </div> */}
              </div>
              <button
                type="submit"
                className={[styles.bookings_btn, "cta_btn"].join(" ")}
              >
                Book A Car
              </button>
            </form>

            <div className={styles.booking_info}>
              <h2>
                Use Our Fast And Reliable Service and Get Served In Minutes
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, fugit odio, sunt voluptas quisquam saepe itaque sequi
                a. Iusto.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default BookingComponent;
