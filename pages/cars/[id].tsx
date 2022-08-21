
import { NextPage } from "next";
import { useRouter } from "next/router";
import {CarData} from './cars-data'


const CarPage:NextPage=(props:any) =>{

    const router =useRouter()
    // const {id} = router.query
    // let apiResult:[] = props.car.data.data

    return (
        <div>
        <>
            This is a car Page
            <br />
            {CarData.map((data:any, i:number) => {
            return <div key={data.id}>{data.name}</div>
            })}
        </>
        </div>
    )
}

export default CarPage
// export async function getServerSideProps (params: any){
//     const req = await fetch(`https://www.natours.dev/api/v1/tours}`)
    
//     return{
//         props:{
//             car:await req.json()
//         },
//     }

// }