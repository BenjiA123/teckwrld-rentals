import { FunctionComponent } from "react";
import styles from './map.module.css'
import {Loader, LoaderOptions} from 'google-maps';

const MapComponent:FunctionComponent =  ()=>{

    const options: LoaderOptions = {/* todo */};
const loader = new Loader('my-api-key', options);

    loader.load().then(function (google) {
        // const map = new google.maps.Map(document.getElementById('map'), {
            // center: {lat: -34.397, lng: 150.644},
            // zoom: 8,
        // });
    });

    return null
}

export default MapComponent