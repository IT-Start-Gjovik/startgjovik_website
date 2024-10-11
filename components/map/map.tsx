import { MapPositionType } from '@/types/MapPosistionType';
import { useEffect, useRef, useState } from 'react';
import fetchMapCdn from './fetchMapCdn';

export default function Map() {
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);

    // Fetches the mazemap cdn's (.js and .css files) and adds them to the document
    useEffect(() => {
        fetchMapCdn();
    }, []);

    useEffect(() => {
        const initializeMazemap = () => {
            if (window.Mazemap && mapContainer.current && !map) {
                const map = new window.Mazemap.Map({
                    campuses: 55,
                    center: { lng: 10.682313, lat: 60.789811 },
                    zoom: 18,
                    container: mapContainer.current,
                    zLevel: 2,
                });
                map.addControl(new window.Mazemap.mapboxgl.NavigationControl());

                map.on('load', () => {
                    const highlighter = new window.Mazemap.Highlighter(map, {
                        showOutline: true,
                        showFill: true,
                        outlineColor: window.Mazemap.Util.Colors.MazeColors.MazeBlue,
                        fillColor: window.Mazemap.Util.Colors.MazeColors.MazeBlue,
                    });

                    window.Mazemap.Data.getPoi(239637).then(
                        (poi: MapPositionType) => {
                            if (poi) {
                                var lngLat = window.Mazemap.Util.getPoiLngLat(poi);
                                map.flyTo({ center: lngLat, zoom: 19, speed: 0.5 });
                                highlighter.highlight(poi);
                            }
                        },
                    );
                });
                setMap(map);
            }
        };

        initializeMazemap();

        const interval = setInterval(() => {
            initializeMazemap();
        }, 1000);

        return () => clearInterval(interval);
    }, [map]);
    return (
        <>
            <div ref={mapContainer} className='h-full w-full rounded-xl'></div>
        </>
    );
}
