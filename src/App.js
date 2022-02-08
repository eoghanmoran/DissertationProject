import React from "react";
import NavBar from './components/NavBar'
import './App.css';
import { AuthProvider } from "./webPages/LoginIn/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Charities from "./webPages/BrowseAllHelp/BrowseAllHelpPage";
import Help from "./webPages/Crisis/CrisisHelpPage";
import Home from "./Home";
import Map from "./webPages/SupportMap/SupportMapPage";
import SearchHelp from "./webPages/SearchHelp/SearchForHelpPage";
import ContactUs from "./webPages/ContactForm/ContactFormPage";
import Login from "./webPages/LoginIn/Login";
import Admin from "./webPages/Admin/Admin";
import PrivateRoute from "./webPages/LoginIn/PrivateRoute";

import UpdateAdminUsers from "./webPages/Admin/UpdateAdminUsers";
import UpdateDatabaseTable from "./webPages/Admin/UpdateDatabaseDashboard";
import SupportMap2 from "./webPages/SupportMap/SupportMap2/SupportMapPage";
import SupportMap3 from "./webPages/SupportMap/SupportMap3/SupportMapPage";
import Addiction from "./webPages/Admin/DatabaseTableUpdate/Addiction/Addiction";

export default function App() {
  <Home />

  return (
    <div>
      
      <NavBar />
      <AuthProvider>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/browseAllHelp"><Charities /></Route>
          <Route path="/supportMap"><Map /></Route>
          <Route path="/crisisHelp"><Help /></Route>
          <Route path="/contactUs"><ContactUs /></Route>
          <Route path="/searchHelp"><SearchHelp/></Route>
          <Route path="/login"><Login /></Route>
          <PrivateRoute exact path="/admin" component={Admin} />
          <Route path="/UpdateAdminUsers"><UpdateAdminUsers /></Route>
          <Route path="/UpdateDatabaseTable"><UpdateDatabaseTable /></Route>
          <Route path="/supportMap2"><SupportMap2 /></Route>
          <Route path="/supportMap3"><SupportMap3 /></Route>
          <Route path="/updateAddiction"><Addiction /></Route>
        </Switch>
      </AuthProvider>
      </div>
  
      
      
  );
}




