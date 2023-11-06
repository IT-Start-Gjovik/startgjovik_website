
import { useEffect, useRef } from "react";
import * as Mazemap from "mazemap";
import "mazemap/mazemap.min.css";
import { MapPositionType } from "@/types/MapPosistionType";

export default function Map() {
    const mapContainer = useRef(null);
    useEffect(() => {
        // creating mazemap 
        if(mapContainer) {
            const map = new Mazemap.Map({
                campuses: 55,
                center: {lng: 10.682313, lat: 60.789811},
                zoom: 18,
                container: mapContainer.current,
                zLevel: 2,
            });
            // adding navigation control
            map.addControl(new Mazemap.mapboxgl.NavigationControl());
            
            map.on("load", () => { // since we are redering on the client we have to wait for the map to load
                const highlighter = new Mazemap.Highlighter(map, {
                    showOutline: true, // optional
                    showFill: true, // optional
                    outlineColor: Mazemap.Util.Colors.MazeColors.MazeBlue, // optional
                    fillColor: Mazemap.Util.Colors.MazeColors.MazeBlue  // optional
                });
                
                //positioning to our location
                Mazemap.Data.getPoi(239637).then( (poi:MapPositionType) => {
                    console.log(poi); // Raw data about the position.
                    if(poi) {
                        var lngLat = Mazemap.Util.getPoiLngLat(poi);
                        map.flyTo({center: lngLat, zoom: 19, speed: 0.5});
                        highlighter.highlight(poi);    
                    }
                });
            });
          
        }
    }, []);
    return (
        <>
        <div ref={mapContainer} className="h-64 w-64"></div> 
        </>
    );
}