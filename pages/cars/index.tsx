import { NextPage } from "next";
import Link from "next/link";
import styles from "./cars.module.css";

const CarsPage: NextPage = () => {
  const carsOnPreview: any[] = [
    {
      id: 1,
      name: "Dodge",
      fueled: false,
      carGrade: 1,
      price: "3388",
      description:
        "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
    },
    {
      id: 2,
      name: "Toyota",
      fueled: true,
      carGrade: 2,
      price: "92579",
      description:
        "etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus",
    },
    {
      id: 3,
      name: "Chevrolet",
      fueled: false,
      carGrade: 3,
      price: "7",
      description:
        "justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices",
    },
    {
      id: 4,
      name: "Ford",
      fueled: true,
      carGrade: 4,
      price: "5911",
      description:
        "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec",
    },
    {
      id: 5,
      name: "Volvo",
      fueled: false,
      carGrade: 5,
      price: "89427",
      description: "mauris enim leo rhoncus sed vestibulum sit amet cursus id",
    },
    {
      id: 6,
      name: "Pontiac",
      fueled: false,
      carGrade: 6,
      price: "709",
      description:
        "lectus in est risus auctor sed tristique in tempus sit amet sem fusce",
    },
    {
      id: 7,
      name: "Eagle",
      fueled: true,
      carGrade: 7,
      price: "5",
      description:
        "eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
    },
    {
      id: 8,
      name: "Mercedes-Benz",
      fueled: false,
      carGrade: 8,
      price: "2",
      description:
        "quisque arcu libero rutrum ac lobortis vel dapibus at diam nam",
    },
    {
      id: 9,
      name: "Dodge",
      fueled: true,
      carGrade: 9,
      price: "2",
      description:
        "ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus",
    },
    {
      id: 10,
      name: "Aston Martin",
      fueled: false,
      carGrade: 10,
      price: "6",
      description:
        "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus",
    },
  ];
  return (
    <>
      <header className={styles.carsHeader}>
        <h2>View All Available Cars</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis
          vitae ad iusto nostrum quis animi voluptatibus repudiandae
          necessitatibus.
        </p>
      </header>

      <div className={styles.search_cars}>
        <input type="text" placeholder="Search Cars" id="" />
        <input type="button" className="cta_btn" value="Filter" />
      </div>
      <section className={styles.carsCategories}>
        {carsOnPreview.map((car, i) => {
          return (
            <div key={i} className={styles.car_preview_cards}>
              <h3>{car.name}</h3>
              <br />
              {/* <span>{car.price}</span> */}
              {/* <br /> */}
              <p>{car.description}</p>
              <br />
              <a
                className="cta_btn"
                key={i}
                href={`/cars/${encodeURIComponent(car.name)}`}
              >
                Only ${car.price}
              </a>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default CarsPage;
