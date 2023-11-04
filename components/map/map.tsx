import { useEffect } from "react";
import * as Mazemap from "mazemap";
import "mazemap/mazemap.min.css";

export default function Map() {
    useEffect(() => {
        const mapContainer = document.getElementById('map');

        // creating mazemap 
        if(mapContainer) {
            const map = new Mazemap.Map({
                campuses: 55,
                center: {lng: 10.682313, lat: 60.789811},
                zoom: 18,
                container: "map",
                zLevel: 2,
            });
            map.addControl(new Mazemap.mapboxgl.NavigationControl());
        }

        // positioning to our location
        Mazemap.Data.getPoi(239637).then( poi => {
            console.log(poi); // Raw data about the POI.
          });
    }, []);
    return (
        <>
        <div id="map" className="h-64 w-64"></div> 
        </>
    );
}