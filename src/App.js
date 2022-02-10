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

import AddictionView from "./webPages/SearchHelp/HelpPages/Addiction";
import BenefitView from "./webPages/SearchHelp/HelpPages/Benefits";
import BereavementView from "./webPages/SearchHelp/HelpPages/Bereavement";
import CancerSupportView from "./webPages/SearchHelp/HelpPages/CancerSupport";
import CarerSupportView from "./webPages/SearchHelp/HelpPages/Carers";
import CommunityOrganisationView from "./webPages/SearchHelp/HelpPages/CommunityOrganisations";
import CounsellingView from "./webPages/SearchHelp/HelpPages/CounsellingSupport";
import DisabilitySupportView from "./webPages/SearchHelp/HelpPages/DisabilitySupport";




import UpdateAdminUsers from "./webPages/Admin/UpdateAdminUsers";
import UpdateDatabaseTable from "./webPages/Admin/UpdateDatabaseDashboard";
import SupportMap2 from "./webPages/SupportMap/SupportMap2/SupportMapPage";
import SupportMap3 from "./webPages/SupportMap/SupportMap3/SupportMapPage";
import AddictionUpdate from "./webPages/Admin/DatabaseTableUpdate/Addiction/Addiction";
import BenefitsUpdate from "./webPages/Admin/Benefits/Benefits";



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
          <Route path="/addictionSupport"><AddictionView /></Route>
          <Route path="/benefitSupport"><BenefitView /></Route>
          <Route path="/bereavementSupport"><BereavementView /></Route>
          <Route path="/cancerSupport"><CancerSupportView /></Route>
          <Route path="/carerSupport"><CarerSupportView /></Route>
          <Route path="/communityOrganisation"><CommunityOrganisationView /></Route>
          <Route path="/counsellingSupport"><CounsellingView /></Route>
          <Route path="/disabilitySupport"><DisabilitySupportView /></Route>



          <Route path="/updateAddiction"><AddictionUpdate /></Route>
          <Route path="/updateBenefits"><BenefitsUpdate /></Route>
        </Switch>
      </AuthProvider>
      </div>
  
      
      
  );
}




