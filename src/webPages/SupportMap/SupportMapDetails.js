
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import React, {Component} from "react";
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
              
     <div className = "mapwrapper"> 

        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: 54.58615,
              lng: -5.93451
            }
          }
        />
</div>

      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAtSOXld25pvSi0_NqOxiRMgB9Fg6g7Dk0'
  })(SupportMapDetails);