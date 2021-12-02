import React from "react";
import {  Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar'
import './App.css';

import Charities from "./webPages/BrowseAllHelp/BrowseAllHelpPage";
import Help from "./webPages/Crisis/CrisisHelpPage";
import Home from "./Home";
import Map from "./webPages/SupportMap/SupportMapPage";
import SearchHelp from "./webPages/SearchHelp/SearchForHelpPage";
import ContactUs from  "./webPages/ContactForm/ContactFormPage";

export default function App() {
  <Home/>

  return (
    <div className ="navbar">

        <NavBar/>
       

      <Switch>
      <Route exact path="/"><Home /></Route>
        <Route path="/browseAllHelp"><Charities/></Route>
        <Route path="/supportMap"><Map/></Route>
        <Route path="/crisisHelp"><Help/></Route>
        <Route path="/contactUs"><ContactUs/></Route>
        <Route path="/searchHelp"><SearchHelp/></Route>

      </Switch>

</div> 
   
  );
}




