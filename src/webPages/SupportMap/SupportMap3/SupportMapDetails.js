
import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import "../../../App.css";
import * as parkData from "../../../data/allServices.json";
import mapStyles from "../mapStyles";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


function Map() {
  const [selectedPark, setSelectedPark] = useState(null);
  const history = useHistory()


  const routeChange = async () => {
    try {
        history.push("/supportMap");
    } catch (error) {
        console.log(error.message);
    }
};

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (

    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 54.585030, lng: -5.935540 }}

    >
      {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.ADDRESS}</p>
            <p>Contact Number : {selectedPark.properties.CONTACT_NUMBER}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (

    <div style={{ width: "75vw", height: "75vh" }}>
      <h3>All Services</h3>
      <Link to="/supportMap3"><button>All Services</button></Link>
      <Link to="/supportMap"><button>Hospitals</button></Link>
      <Link to="/supportMap2"><button>Community Ornagisations</button></Link>
      
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY
          }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}