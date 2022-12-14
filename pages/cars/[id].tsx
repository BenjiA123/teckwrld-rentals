import { NextPage } from "next";
import { useRouter } from "next/router";

const CarPage: NextPage = (props: any) => {
  const router = useRouter();
  // const {id} = router.query
  // let apiResult:[] = props.car.data.data
  const carData = [
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
    <div>
      <>
        This is a car Page
        <br />
        {carData.map((data: any, i: number) => {
          return <div key={data.id}>{data.name}</div>;
        })}
      </>
    </div>
  );
};

export default CarPage;
export async function getServerSideProps(params: any) {
  const req = await fetch(`http://localhost:3000/api/flutterwave-payment`);
  const data = await req.json();
  return {
    props: {
      car: { data },
    },
  };
}
