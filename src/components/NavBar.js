import React, { useState } from "react";
import Logo from "../../src/images/logosmall.png"

import "./Navbar.css";

function Navbar() {
    
    return (

        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">

       <div class="container-fluid">
       <a class="navbar-brand" href="#"><img src={Logo} alt="Fsplogo" height="80" width= "85"  /></a>

      <button class = "navbar-toggler" type ="button" data-toggle="collapse" data-target="#navbarResponsive">
      <span class="navbar-toggler-icon"><i class ="fa fa-bars fa-1x"></i></span>
      </button>

      <div class = {"collapse navbar-collapse = show"} id={"navbarResponsive =show"}>
         
      <ul class="navbar-nav ml-auto">
          <li class= "nav-item">
               <a class="nav-link" href="/">Home</a></li> 
          <li class= "nav-item">
               <a class="nav-link" href="/crisisHelp">Urgent Support</a></li> 
          <li class= "nav-item">
               <a class="nav-link" href="/searchHelp">Search</a></li> 
          <li class= "nav-item">
               <a class="nav-link" href="/allServicesMap">Support</a></li> 
          <li class= "nav-item">
               <a class="nav-link" href="/contactUs">Contact</a></li> 
          <li class= "nav-item">
               <a class="nav-link" href="/admin">Admin</a>  </li>           
         </ul>
            </div>
         </div>
     </nav>

    
    );
}

export default Navbar;
