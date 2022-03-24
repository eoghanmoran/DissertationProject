import "./SupportMapCSS.css"
import "../../App.css"
import React, { useState, useEffect } from "react";
import Footer from '../../components/Footer'
import { Form, Button, Card, Alert, Container, Table } from "react-bootstrap"
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import * as parkData from "../../data/counselling.json"
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
            <Container width="100%" fluid background-colour="white">
                <div className="">
                    <div className="">
                        <div class="card">
                            <div class="card-body">
                                <h1 class=" text-center display-4">Counselling Support</h1>
                                <div class="btn-group d-flex justify-content-center ">
                                <button class=" btn btn-primary dropdown-toggle " type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Click here to select more Services!
                                    </button>

                                    <div class="dropdown-menu scrollable-menu text-center" aria-labelledby="dropdownMenuBtn">
                                    <a class="dropdown-item" href="/allServicesMap">All Services</a>
                                        <a class="dropdown-item" href="/hospitalSupportMap">Local Healthcare</a>
                                        <a class="dropdown-item" href="/communitySupportMap">Community Organisations</a>
                                        <a class="dropdown-item" href="/addictionSupportMap">Addiction Support</a>
                                        <a class="dropdown-item" href="/benefitsSupportMap">Benefit, Debt & Employment Advice</a>
                                        <a class="dropdown-item" href="/bereavementSupportMap">Bereavement Support</a>
                                        <a class="dropdown-item" href="/cancerSupportMap">Cancer Support</a>
                                        <a class="dropdown-item" href="/carersSupportMap">Carers Support</a>
                                        <a class="dropdown-item" href="/counsellingSupportMap">Counselling</a>
                                        <a class="dropdown-item" href="/disabilitySupportMap">Disability Support</a>
                                        <a class="dropdown-item" href="/ethnicMinoritySupportMap">Ethnic Minority Support</a>
                                        <a class="dropdown-item" href="/familyChildcareSupportMap">Family & Childcare Support</a>
                                        <a class="dropdown-item" href="/heartDiseaseSupportMap">Heart & Circulatory Disease Support</a>
                                        <a class="dropdown-item" href="/homelessnessSupportMap">Homelessness Support</a>
                                        <a class="dropdown-item" href="/mentalHealthSupportMap"> Mental Health Support</a>
                                        <a class="dropdown-item" href="/oldPersonSupportMap">Older Person Support</a>
                                        <a class="dropdown-item" href="/relationshipSexualitySupportMap">Relationships, Sexuality & Sexual Health Support</a>
                                        <a class="dropdown-item" href="/sexOrientationTransGroupsSupportMap">Sexual Orientation & Transgender Groups</a>
                                        <a class="dropdown-item" href="/violenceTraumaSupportMap">Violence Trauma Support</a>
                                        <a class="dropdown-item" href="/womenSupportMap">Women Support</a>
                                        <a class="dropdown-item" href="/youngPeopleSupportMap">Young People Support</a>
                                    </div>
                                </div>

                                <div className="col-md-12">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

