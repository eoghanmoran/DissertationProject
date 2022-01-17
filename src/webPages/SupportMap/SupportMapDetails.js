
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import React, { Component } from "react";
import '../../App.css';


const mapStyles = {
  width: '30%',
  height: '30%',
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
  margin: "1rem",
};

export class SupportMapDetails extends Component {

  render() {
    return (
      <div className="mapwrapper">
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(SupportMapDetails);