import "./SupportMapCSS.css"
import "../../App.css"
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import * as parkData from "../../data/CommunityServices.json"
import { Link } from "react-router-dom";




function Map() {
    const [selectedPark, setSelectedPark] = useState(null);
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
        <div className="background">
            <div className="container">
                <div className="contact">
                    <div
                        className="leftSide"
                    >
                        <MapWrapped
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY
                                }`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />

                    </div>
                    <div className="rightSideText container-fluid">
                                <div class = "Services">  
                                <h1 className="h1"> Community Support</h1>
                                <a href ="/allServicesMap"> 
                                    <button 
                                    type = "button" 
                                    class= "btn btn-outline-secondary btn-sm btn-block">All Services</button></a> 
                                <a href ="/hospitalSupportMap">
                                    <button type = "button" class= "btn btn-outline-secondary btn-sm btn-block">Hospitals</button></a>
                                <a href ="/communitySupportMap">                <button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Community Organisations</button></a>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}


