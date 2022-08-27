import { FunctionComponent } from "react";
import styles from "./footer.module.css";
const FooterComponent: FunctionComponent = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>
                <strong>TeckWrld</strong>
              </h3>
              <p>
                In Teck Wrld, our goal is to give our clients the best
                applications to scale their businesses. In this Company, one
                thing that we can assure you is EXCELLENCE.
              </p>
              <div className="social_icons">
                <ol>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://web.facebook.com/benjamin.akande.75"
                      className="fa fa-facebook"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/teckwrld"
                      className="fa fa-twitter"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/c/TeckWrld"
                      className="fa fa-youtube"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/benjamin-akande/"
                      className="fa fa-linkedin"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/teckwrld"
                      className="fa fa-instagram"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://wa.me/2349096890109"
                      className="fa fa-whatsapp"
                    ></a>
                  </li>
                </ol>
              </div>
            </div>
            <div className="col contact_us">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <i className="fa fa-phone"></i>
                  <a target="_blank" rel="noreferrer" href="tel:09096890109">
                    {" "}
                    09096890109
                  </a>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:adeoul001@gmail.com"
                  >
                    {" "}
                    adeoul001@gmail.com
                  </a>
                </li>
                <li>
                  <i className="fa fa-map-marker"></i>
                  <a target="_blank" rel="noreferrer" href="sms:09096890109">
                    {" "}
                    Abuja, FCT, Nigeria
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Our Services</h3>
              <ul>
                <li>
                  <a target="_blank" rel="noreferrer" href="index.html">
                    Rent Your Car
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="about.html">
                    Drivers
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="contact.html">
                    Rent A Car
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Quick Link</h3>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="about.html#QASection"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <p
            className={styles.copywrite}
            style={{
              //   color: "red",
              textAlign: "center",
            }}
          >
            Copyright &copy; 2022 by{"  "}
            <strong>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.teckwrld.com"
              >
                TeckWrld
              </a>
            </strong>
            <br />
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
