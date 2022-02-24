import React from "react";
import NavBar from './components/NavBar'
import './App.css';
import { AuthProvider } from "./webPages/LoginIn/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Charities from "./webPages/BrowseAllHelp/BrowseAllHelpPage";
import Help from "./webPages/Crisis/CrisisHelpPage";
import Home from "./webPages/Home/Home";

import AllServicesMap from "./webPages/SupportMap/AllServicesMap";

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
import UpdateDatabaseTable from "./webPages/Admin/UpdateDatabaseDashboard/UpdateDatabaseDashboard";

import CommunitySupportMap from "./webPages/SupportMap/CommunitySupportMap";
import HospitalSupportMap from "./webPages/SupportMap/HospitalSupportMap";

import AddictionUpdate from "./webPages/Admin/DatabaseTableUpdate/Addiction/Addiction";
import BenefitsUpdate from "./webPages/Admin/Benefits/Benefits";
import BereavementUpdate from "./webPages/Admin/Bereavement/Bereavement";
import CancerSupportUpdate from "./webPages/Admin/CancerSupport/CancerSupport";
import CarersUpdate from "./webPages/Admin/Carers/Carers";
import CommunityOrganisationsUpdate from "./webPages/Admin/Carers/Carers";
import CounsellingUpdate from "./webPages/Admin/Counselling/Counselling";
import DisabilitySupportUpdate from "./webPages/Admin/DisabilitySupport/DisabilitySupport";
import EatingDisordersUpdate from "./webPages/Admin/EatingDisorders/EatingDisorders";
import OldPersonSupportUpdate from "./webPages/Admin/OlderPersonSupport/OldPersonSupport";
import EthnicMinoritySupportUpdate from "./webPages/Admin/EthnicMinoritySupport/EthnicMinoritySupport";
import FamilyChildcareSupportUpdate from "./webPages/Admin/FamilyChildcareSupport/FamilyChildcareSupport";
import HeartCirculatoryDiseaseUpdate from "./webPages/Admin/HeartCirculatoryDisease/HeartCirculatoryDisease";
import HelplinesUpdate from "./webPages/Admin/Helplines/Helplines";
import HomelessnessUpdate from "./webPages/Admin/Homelessness/Homelessness";
import MentalHealthUpdate from "./webPages/Admin/MentalHealth/MentalHealth";
import RelationshipSexualitySupportUpdate from "./webPages/Admin/RelationshipSexualitySupport/RelationshipSexualitySupport";
import SexOrientationTransGroupsSupportUpdate from "./webPages/Admin/SexOrientationTransGroups/SexOrientationTransGroups";
import ViolenceTraumaSupportUpdate from "./webPages/Admin/ViolenceTraumaSupport/ViolenceTraumaSupport";
import WomenSupportUpdate from "./webPages/Admin/WomenSupport/WomenSupport";
import YoungPeopleSupportUpdate from "./webPages/Admin/YoungPeopleSupport/YoungPeopleSupport";








export default function App() {
  <Home />

  return (
    <div>
      
      <NavBar />
      <AuthProvider>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/browseAllHelp"><Charities /></Route>
          <Route path="/allServicesMap"><AllServicesMap /></Route>
          <Route path="/crisisHelp"><Help /></Route>
          <Route path="/contactUs"><ContactUs /></Route>
          <Route path="/searchHelp"><SearchHelp/></Route>
          <Route path="/login"><Login /></Route>
          <PrivateRoute exact path="/admin" component={Admin} />
          <Route path="/UpdateAdminUsers"><UpdateAdminUsers /></Route>
          <Route path="/UpdateDatabaseTable"><UpdateDatabaseTable /></Route>

          <Route path="/communitySupportMap"><CommunitySupportMap /></Route>
          <Route path="/hospitalSupportMap"><HospitalSupportMap /></Route>

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
          <Route path="/updateBereavement"><BereavementUpdate /></Route>
          <Route path="/updateCancerSupport"><CancerSupportUpdate /></Route>
          <Route path="/updateCarers"><CarersUpdate /></Route>
          <Route path="/updateCommunityOrganisations"><CommunityOrganisationsUpdate /></Route>
          <Route path="/updateCounselling"><CounsellingUpdate /></Route>
          <Route path="/updateDisabilitySupport"><DisabilitySupportUpdate /></Route>
          <Route path="/updateEatingDisorders"><EatingDisordersUpdate /></Route>
          <Route path="/updateOldPersonSupport"><OldPersonSupportUpdate /></Route>
          <Route path="/updateEthnicMinoritySupport"><EthnicMinoritySupportUpdate /></Route>
          <Route path="/updateFamilyChildcareSupport"><FamilyChildcareSupportUpdate /></Route>
          <Route path="/updateHeartCirculatoryDisease"><HeartCirculatoryDiseaseUpdate /></Route>
          <Route path="/updateHelplines"><HelplinesUpdate /></Route>
          <Route path="/updateHomelessness"><HomelessnessUpdate /></Route>
          <Route path="/updateMentalHealth"><MentalHealthUpdate /></Route>
          <Route path="/updateRelationshipSexualitySupport"><RelationshipSexualitySupportUpdate /></Route>
          <Route path="/updateSexOrientationTransGroups"><SexOrientationTransGroupsSupportUpdate /></Route>
          <Route path="/updateViolenceTraumaSupport"><ViolenceTraumaSupportUpdate /></Route>
          <Route path="/updateWomenSupport"><WomenSupportUpdate /></Route>
          <Route path="/updateYoungPeopleSupport"><YoungPeopleSupportUpdate /></Route>
          
          


        </Switch>
      </AuthProvider>
      </div>
  
      
      
  );
}




