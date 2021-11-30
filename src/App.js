import React from "react";
import {  Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar'
import './App.css';

import Charities from "./BrowseAllHelpPage";
import Help from "./CrisisHelpPage";
import Home from "./Home";
import Map from "./SupportMapPage";
import SearchHelp from "./SearchForHelpPage";
import ContactUs from  "./ContactFormPage";


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




