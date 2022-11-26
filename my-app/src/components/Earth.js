import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'
import Globe from 'react-globe.gl';
import * as THREE from 'three';

const Earth = (props) => {
    const [loading, setLoading] = useState(true)
    const [airports, setAirports] = useState([]);

    const getProfile = async () => {
        try {
            setLoading(true)
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
        } finally {
            setLoading(false)
        }
    }
    const satGeometry = new THREE.CylinderGeometry( .25, .25, 1);
    const satMaterial = new THREE.MeshLambertMaterial({ color: 'ghostwhite', transparent: true, opacity: 0.7 });
    const THREEobj = new THREE.Mesh(satGeometry, satMaterial);

    useEffect(() => getProfile, [])

    return loading ? <p> loading !</p> : <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        objectsData={airports}
        objectLat="Latitude"
        objectLng="Longitude"
        objectThreeObject={THREEobj}
    />
}

export default Earth;
