import React from "react";
import styles from "./register.module.css";

export default class Register extends React.Component {
  render() {
    return (
      <>
        <div className={styles.register_page}>
          <div className={styles.register_des}>
            <h2>Sign Up</h2>
            <p>
              Welcome To TeckWrld Rental where Car Rental is just a call away,
              Sign Up and get a 10% discount on you first 5 Rents.
            </p>
          </div>
          <div className={styles.register_form}>
            {/* <h2>Sign Up</h2> */}
            <input type="text" placeholder="Full Name" name="" id="" />
            <br />
            <input type="email" placeholder="Email" name="" id="" />
            {/* <br /> */}
            {/* <input type="phone" placeholder="Phone" name="" id="" /> */}
            <br />
            <input type="password" placeholder="Password" name="" id="" />
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              name=""
              id=""
            />

            <input type="button" className="cta_btn" value="Sign Up" />
            <br />
          </div>
        </div>
      </>
    );
  }
}
