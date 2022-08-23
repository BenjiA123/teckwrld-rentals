import { FunctionComponent } from "react";
import styles from './chart.module.css'
import { Line } from 'react-chartjs-2';

import {Chart as ChartJS} from 'react-chartjs-2'

const ChartComponent:any =  ()=>{

    const labels:any = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
    return (
        <>
        <Line data={
            labels
            
        }/>
        </>
    )
    
}

export default ChartComponent