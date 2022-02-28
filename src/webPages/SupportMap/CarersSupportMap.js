import "./SupportMapCSS.css"
import "../../App.css"
import Footer from '../../components/Footer'
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import * as parkData from "../../data/carers.json"
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
                                <h1 className="h1"> Carers Support</h1>
                                <a href ="/allServicesMap"> 
                                <button 
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">All Services</button></a> 
                                <a href ="/hospitalSupportMap">
                                <button type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Hospitals</button></a>
                                <a href ="/communitySupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Community Organisations</button></a>
                                <a href ="/addictionSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Addiction Support</button></a>
                                <a href ="/benefitsSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Benefits Support</button></a>
                                <a href ="/bereavementSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Bereavement Support</button></a>
                                <a href ="/cancerSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Cancer Support</button></a>
                                <a href ="/carersSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Carers</button></a>
                                <a href ="/counsellingSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Counselling</button></a>
                                <a href ="/disabilitySupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Disability Support</button></a>
                                <a href ="/eatingDisordersSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Eating Disorders</button></a>
                                <a href ="/ethnicMinoritySupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Ethnic Minority Support</button></a>
                                <a href ="/familyChildcareSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Family Childcare Support</button></a>
                                <a href ="/heartDiseaseSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Heart Disease Support</button></a>
                                <a href ="/homelessnessSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Homelessness Support</button></a>
                                <a href ="/mentalHealthSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Mental Health Support</button></a>
                                <a href ="/oldPersonSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Elderly Support</button></a>
                                <a href ="/relationshipSexualitySupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Relationship and Sexuality Support</button></a>
                                <a href ="/sexOrientationTransGroupsSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">LGBTQIA+ Support</button></a>
                                <a href ="/violenceTraumaSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Violence/Trauma Support</button></a>
                                <a href ="/womenSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Women Support</button></a>
                                <a href ="/youngPeopleSupportMap"><button    
                                type = "button" 
                                class= "btn btn-outline-secondary btn-sm btn-block">Young People Support</button></a>
                                
                        </div>
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}



