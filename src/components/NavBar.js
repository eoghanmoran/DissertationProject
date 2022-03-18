import React, { useState } from "react";
import Logo from "../../src/images/logosmall.png"

import "./Navbar.css";

function Navbar() {
    
    return (
        <nav class ="navbar navbar-expand-sm navbar-light bg-light">

       <div class="container-fluid ">
       <a class="navbar-brand" href="#"><img src={Logo} alt="Fsplogo" height="110" width= "115"  /></a>

      <button class = "navbar-toggler" type ="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls ="navBarResponsive" aria-expanded ="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon = show"></span>
      </button>

      <div class = {"collapse navbar-collapse = show"} id="navbarResponsive">
         
      <ul class="navbar-nav ml-auto">
          <li class= "nav-item">
               <a class="nav-link" href="/">Home</a></li> 
          <li class= "nav-item">
               <a class="nav-link" href="/crisisHelp">Urgent Support</a></li> 
          <li class= "nav-item">
               <a class="nav-link" href="/searchHelp">Search Help</a></li> 
          <li class= "nav-item">
               <a class="nav-link" href="/allServicesMap">Support Map</a></li> 
          <li class= "nav-item">
               <a class="nav-link" href="/contactUs">Contact Us</a></li> 
          <li class= "nav-item">
               <a class="nav-link" href="/admin">Admin</a>  </li>           
         </ul>
            </div>
         </div>
        
     </nav>
    
    
    );
}

export default Navbar;
