import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../supabaseClient";
import Globe from "react-globe.gl";
import { SphereGeometry, MeshLambertMaterial, Mesh, MOUSE } from "three";

const Earth = (props) => {
  const globeEl = useRef();
  const [airports, setAirports] = useState([]);
  const [IATA, setIATA] = useState("");

  const highlightAirports = ["BRW", "EWN", "LAX", "ORD"]
  const satGeometry = new SphereGeometry(0.25);
  const normalMaterial = new MeshLambertMaterial({
    color: "ghostwhite",
    transparent: true,
    opacity: 0.7,
  });
  const highlightMaterial = new MeshLambertMaterial({
    color: "darkorchid",
    transparent: true,
    opacity: 0.7,
  });


  useEffect(() => {
    async function getAirports() {
      try {
        let { data, error, status } = await supabase
          .from("Airports")
          .select("*");

        console.log(data);

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          setAirports(data);
        }
      } catch (error) {
        alert(error.message);
      }
    }
    getAirports()
  }, []);

  useEffect(() => {
    // aim at continental US centroid
    globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 });
    // limits how far out you can zoom
    globeEl.current.controls().maxDistance = 250;
    // changes the functionality of right click
    globeEl.current.controls().mouseButtons = {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.DOLLY, // need to write instructions based on this
    };
  }, []);

  const zoomToAirport = (lat, lng) => {
    globeEl.current.pointOfView({ lat: lat, lng: lng, altitude: 0.5})
  }

  useEffect(() => {
    const handleZoom = (IATA) => {
      let result = airports.find(obj => {
        return obj.IATA === IATA
      })
      if(result !== undefined) {
        zoomToAirport(result.Latitude, result.Longitude)
      }
    }
    if (props.IATA !== IATA) {
      handleZoom(IATA);
      setIATA(IATA);
    }
  }, [props, IATA, airports]);

  const onAirportClick = (obj) => {
    props.changeAirport(obj.IATA);
    zoomToAirport(obj.Latitude, obj.Longitude);
  };

  const getTHREEobj = (arg) => {
    if(highlightAirports.indexOf(arg.IATA) >= 0) {
      return new Mesh(satGeometry, highlightMaterial);
    }
    return new Mesh(satGeometry, normalMaterial);
  }

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      objectsData={airports}
      objectLabel="IATA"
      objectLat="Latitude"
      objectLng="Longitude"
      objectAltitude={0}
      objectThreeObject={getTHREEobj}
      height={window.innerHeight}
      width={0.5 * window.innerWidth}
      onObjectClick={onAirportClick}
    />
  );
};

export default Earth;
