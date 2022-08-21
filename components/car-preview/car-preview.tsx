import Link from "next/link"
import { FunctionComponent } from "react"
import Image from 'next/image'
import styles from './Car-preview.module.css'

const CarPreviewComponent:FunctionComponent = (props:any)=>{
    console.log(props)

 interface Car 
    {
    id:Number,
    name:String,
    fueled:Boolean,
    carGrade:Number,
    price:String,
    description:String}

    const carsOnPreview:Car[] = [{"id":1,"name":"Dodge","fueled":false,"carGrade":1,"price":"3388","description":"sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus"},
    {"id":2,"name":"Toyota","fueled":true,"carGrade":2,"price":"92579","description":"etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus"},
    {"id":3,"name":"Chevrolet","fueled":false,"carGrade":3,"price":"7","description":"justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices"},
    {"id":4,"name":"Ford","fueled":true,"carGrade":4,"price":"5911","description":"vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec"},
    {"id":5,"name":"Volvo","fueled":false,"carGrade":5,"price":"89427","description":"mauris enim leo rhoncus sed vestibulum sit amet cursus id"},
    {"id":6,"name":"Pontiac","fueled":false,"carGrade":6,"price":"709","description":"lectus in est risus auctor sed tristique in tempus sit amet sem fusce"},
    {"id":7,"name":"Eagle","fueled":true,"carGrade":7,"price":"5","description":"eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in"},
    {"id":8,"name":"Mercedes-Benz","fueled":false,"carGrade":8,"price":"2","description":"quisque arcu libero rutrum ac lobortis vel dapibus at diam nam"},
    {"id":9,"name":"Dodge","fueled":true,"carGrade":9,"price":"2","description":"ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus"},
    {"id":10,"name":"Aston Martin","fueled":false,"carGrade":10,"price":"6","description":"ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus"},
    ]
    return (
        <div>
            <>
            <section className={styles.car_preview_section}>
                <div className={styles.car_preview_description}>
                    <h2>Get Any Car Type</h2>
                    <p>We rent Cars for all groups and budgets to provide the best
                        experiences for our clients
                    </p>
                </div>
                <div className={styles.car_preview_slideshow}>


                {carsOnPreview.map((el,i) =>{
                    return <div key={i} className={styles.car_preview_cards}>
                    <h3>{el.name}</h3>
                    <span>{el.name}</span><br />
                    <span>{el.price}</span><br />
                    <p>{el.description}</p>
                </div>
                })}
                    
                </div>
            </section>
            </>
        </div>
    )
}

export default CarPreviewComponent