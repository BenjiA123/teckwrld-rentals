import Link from "next/link";
import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./Car-preview.module.css";

const CarPreviewComponent: any = (props: any) => {
  interface Car {
    id: Number;
    name: String;
    fueled: Boolean;
    carGrade: Number;
    seatNo: Number;
    location: String;
    price: String;
    rating: Number;
    description: String;
  }

  const carsOnPreview: Car[] = [
    {
      id: 1,
      rating: 4,
      name: "Dodge",
      fueled: false,
      carGrade: 1,
      price: "3388",
      seatNo: 4,
      location: "Alaba",
      description:
        "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    },
    {
      id: 2,
      rating: 4,
      name: "Toyota",
      fueled: true,
      carGrade: 2,
      price: "92579",
      seatNo: 4,
      location: "Zungeru",
      description:
        "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    },
    {
      id: 3,
      rating: 4,
      name: "Chevrolet",
      fueled: false,
      carGrade: 3,
      price: "7",
      seatNo: 4,
      location: "Dubai",
      description:
        "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    },
    {
      id: 4,
      rating: 4,
      name: "Ford",
      fueled: true,
      carGrade: 4,
      price: "5911",
      seatNo: 4,
      location: "Finland",
      description:
        "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    },
    {
      id: 5,
      rating: 4,
      name: "Volvo",
      fueled: false,
      carGrade: 5,
      price: "89427",
      seatNo: 4,
      location: "Bauchi",
      description:
        "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    },
    {
      id: 6,
      rating: 4,
      name: "Pontiac",
      fueled: false,
      carGrade: 6,
      price: "709",
      seatNo: 4,
      location: "Minna",
      description:
        "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    },
    {
      id: 7,
      rating: 4,
      name: "Eagle",
      fueled: true,
      carGrade: 7,
      price: "5",
      seatNo: 4,
      location: "Gboko",
      description:
        "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    },
    {
      id: 8,
      rating: 3,
      name: "Mercedes-Benz",
      fueled: false,
      carGrade: 8,
      price: "2",
      seatNo: 4,
      location: "America",
      description:
        "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    },
    {
      id: 9,
      rating: 1,
      name: "Dodge",
      fueled: true,
      carGrade: 9,
      price: "2",
      seatNo: 4,
      location: "Dubai",
      description:
        "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    },
    {
      id: 10,
      rating: 4,
      name: "Aston Martin",
      fueled: false,
      carGrade: 10,
      price: "6",
      seatNo: 4,
      location: "Dubai",
      description:
        "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    },
  ];
  return (
    <>
      <section className={styles.car_preview_section}>
        <div className={styles.car_preview_description}>
          <h2>Get Any Car {props.type}</h2>
          <p>
            We rent Cars for all groups and budgets to provide the best
            experiences for our clients
          </p>
        </div>
        <div className={styles.car_preview_slideshow}>
          {carsOnPreview.map((car: any, i) => {
            return (
              <div className={styles.car_preview_cards} key={i}>
                <Image
                  src={"/header_background.jpg"}
                  alt="Car Image"
                  width="200"
                  loading="lazy"
                  height="100%"
                  layout="responsive"
                />
                <span>{car.name} </span>
                <ul className={styles.car_details}>
                  <p>{car.description}</p>

                  <div className={styles.cardItems}>
                    <li>
                      <i className="fa fa-map-marker"></i>&nbsp;&nbsp;
                      {car.location}
                    </li>
                    <li>
                      <i className="fa fa-user"></i>&nbsp;&nbsp;
                      {car.seatNo}
                    </li>
                    <li>
                      <i className="fa fa-money"></i>&nbsp;&nbsp; ${car.price}
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </li>
                  </div>
                </ul>
                <div className={styles.details_sub}>
                  <a
                    className={styles.carDetails}
                    href={`/cars/${encodeURIComponent(car.name)}`}
                  >
                    Details
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CarPreviewComponent;
