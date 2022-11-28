import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabaseClient'
import Globe from 'react-globe.gl';
import {SphereGeometry,MeshLambertMaterial,Mesh, MOUSE} from 'three';

const Earth = (props) => {
    const globeEl = useRef()
    const [airports, setAirports] = useState([]);

    const getAirports = async () => {
        try {
            let { data, error, status } = await supabase
                .from('Airports')
                .select('*')
                
            console.log(data)
            
            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setAirports(data)
            }
        } catch (error) {
            alert(error.message)
        }
    }

    const satGeometry = new SphereGeometry(.25);
    const satMaterial = new MeshLambertMaterial({ color: 'ghostwhite', transparent: true, opacity: 0.7 });
    const THREEobj = new Mesh(satGeometry, satMaterial);

    useEffect(() => getAirports, [])

    useEffect(() => { 
      // aim at continental US centroid 
      globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 0.75 })
      // limits how far out you can zoom
      globeEl.current.controls().maxDistance = 250
      // changes the functionality of right click
      globeEl.current.controls().mouseButtons = {
        LEFT: MOUSE.ROTATE,
        MIDDLE: MOUSE.DOLLY,
        RIGHT: MOUSE.DOLLY // need to write instructions based on this
      }
    }, [])

    const onAirportClick = (obj) => {
        console.log(obj);
        props.changeAirport(obj.IATA);
    }

    return <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        objectsData={airports}
        objectLabel='IATA'
        objectLat='Latitude'
        objectLng='Longitude'
        objectAltitude={0}
        objectThreeObject={THREEobj}
        height={window.innerHeight}
        width={0.7 * window.innerWidth}
        onObjectClick = {onAirportClick}
/>;
}

export default Earth;
