
import { NextPage } from "next";
import { useRouter } from "next/router";



const CarPage:NextPage=(props) =>{

    const router =useRouter()
    const {id} = router.query

    return (
        <div>
        <>
            This is a car Page
            {/* {props} */}
        </>
        </div>
    )
}

export default CarPage


export async function getServerSideProps (){
    const req = await fetch(`https://www.natours.dev/api/v1/tours`)
    const data = req.json()
    
    console.log(data)
    return{
        props:{
            car:"data"
        },
    }

}