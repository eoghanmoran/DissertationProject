import React from "react";
import NavBar from './components/NavBar'
import './App.css';
import { AuthProvider } from "./webPages/LoginIn/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Charities from "./webPages/BrowseAllHelp/BrowseAllHelpPage";
import Help from "./webPages/Crisis/CrisisHelpPage";
import Home from "./webPages/Home/Home";
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
import EatingDisorder from "./webPages/SearchHelp/HelpPages/EatingDisorder";
import EthnicMinority from "./webPages/SearchHelp/HelpPages/EthnicMinoritySupport";
import FamilyChildcare from "./webPages/SearchHelp/HelpPages/FamilyChildCareSupport";
import HeartCirculatory from "./webPages/SearchHelp/HelpPages/HeartCirculatoryDisease";
import Helplines2 from "./webPages/SearchHelp/HelpPages/Helplines";
import Homelessness from "./webPages/SearchHelp/HelpPages/Homelessness";
import Hospitals from "./webPages/SearchHelp/HelpPages/Hospitals";
import MentalHealth from "./webPages/SearchHelp/HelpPages/MentalHealth";
import Elderly from "./webPages/SearchHelp/HelpPages/Elderly";
import Relationships from "./webPages/SearchHelp/HelpPages/Relationship";
import SexOrientation from "./webPages/SearchHelp/HelpPages/SexOreintation";
import ViolenceTrauma from "./webPages/SearchHelp/HelpPages/ViolenceTrauma";
import WomenSupport from "./webPages/SearchHelp/HelpPages/WomenSupport";
import YoungPeople from "./webPages/SearchHelp/HelpPages/YoungPeopleSupport";


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
          <Route path="/eatingDisorderSupport"><EatingDisorder/></Route>
          <Route path="/ethnicMinoritySupport"><EthnicMinority/></Route>
          <Route path="/familyChildcareSupport"><FamilyChildcare/></Route>
          <Route path="/heartCirculatory"><HeartCirculatory/></Route>
          <Route path="/helplines"><Helplines2/></Route>
          <Route path="/homelessnessSupport"><Homelessness/></Route>
          <Route path="/hospitals"><Hospitals/></Route>
          <Route path="/mentalHealthSupport"><MentalHealth/></Route>
          <Route path="/elderlySupport"><Elderly/></Route>   
          <Route path="/relationshipSupport"><Relationships/></Route> 
          <Route path="/sexualOrientationSupport"><SexOrientation/></Route>
          <Route path="/violenceTraumaSupport"><ViolenceTrauma/></Route>
          <Route path="/womenSupport"><WomenSupport/></Route>
          <Route path="/youngPeopleSupport"><YoungPeople/></Route>


          <Route path="/updateAddiction"><AddictionUpdate /></Route>
          <Route path="/updateBenefits"><BenefitsUpdate /></Route>
        </Switch>
      </AuthProvider>
      </div>
  
      
      
  );
}




