import React, { useState } from "react";
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
import ForgotPassword from "./webPages/LoginIn/ForgotPassword";
import Admin from "./webPages/Admin/Admin";
import PrivateRoute from "./webPages/LoginIn/PrivateRoute";

import AddictionView from "./webPages/SearchHelp/HelpPages/Addiction";
import BenefitView from "./webPages/SearchHelp/HelpPages/Benefits";
import BereavementView from "./webPages/SearchHelp/HelpPages/Bereavement";
import CancerSupportView from "./webPages/SearchHelp/HelpPages/CancerSupport";
import CarerSupportView from "./webPages/SearchHelp/HelpPages/Carers";
import ChronicConditions from "./webPages/SearchHelp/HelpPages/ChronicConditions";
import CommunityOrganisationView from "./webPages/SearchHelp/HelpPages/CommunityOrganisations";
import CounsellingView from "./webPages/SearchHelp/HelpPages/CounsellingSupport";
import DisabilitySupportView from "./webPages/SearchHelp/HelpPages/DisabilitySupport";
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

import UpdateAdminUsers from "./webPages/Admin/UpdateProfile";
import UpdateProfileDash from "./webPages/Admin/UpdateProfileDashboard";
import UpdateDatabaseTable from "./webPages/Admin/UpdateDatabaseDashboard/UpdateDatabaseDashboard";
import Signup from "./webPages/Admin/Signup";

import CommunitySupportMap from "./webPages/SupportMap/CommunitySupportMap";
import HospitalSupportMap from "./webPages/SupportMap/HospitalSupportMap";
import AddictionSupportMap from "./webPages/SupportMap/AddictionSupportMap";
import BenefitsSupportMap from "./webPages/SupportMap/BenefitsSupportMap";
import BereavementSupportMap from "./webPages/SupportMap/BereavementSupportMap";
import CancerSupportMap from "./webPages/SupportMap/CancerSupportMap";
import CarersSupportMap from "./webPages/SupportMap/CarersSupportMap";
import CounsellingSupportMap from "./webPages/SupportMap/CounsellingSupportMap";
import DisabilitySupportMap from "./webPages/SupportMap/DisabilitySupportMap";
import EthnicMinoritySupportMap from "./webPages/SupportMap/EthnicMinoritySupportMap";
import FamilyChildcareSupportMap from "./webPages/SupportMap/FamilyChildcareSupportMap";
import HeartDiseaseSupportMap from "./webPages/SupportMap/HeartDiseaseSupportMap";
import HomelessnessSupportMap from "./webPages/SupportMap/HomelessnessSupportMap";
import MentalHealthSupportMap from "./webPages/SupportMap/MentalHealthSupportMap";
import OldPersonSupportMap from "./webPages/SupportMap/OldPersonSupportMap";
import RelationshipSexualitySupportMap from "./webPages/SupportMap/RelationshipSexualitySupportMap";
import SexOrientationTransGroupsSupportMap from "./webPages/SupportMap/SexOrientationTransGroupsSupportMap";
import ViolenceTraumaSupportMap from "./webPages/SupportMap/ViolenceTraumaSupportMap";
import WomenSupportMap from "./webPages/SupportMap/WomenSupport";
import YoungPeopleSupportMap from "./webPages/SupportMap/YoungPeopleSupportMap";

import AddictionUpdate from "./webPages/Admin/DatabaseTableUpdate/Addiction/Addiction";
import BenefitsUpdate from "./webPages/Admin/Benefits/Benefits";
import BereavementUpdate from "./webPages/Admin/Bereavement/Bereavement";
import CancerSupportUpdate from "./webPages/Admin/CancerSupport/CancerSupport";
import CarersUpdate from "./webPages/Admin/Carers/Carers";
import ChronicConditionsUpdate from "./webPages/Admin/ChronicConditions/ChronicConditions";
import CommunityOrganisationsUpdate from "./webPages/Admin/Carers/Carers";
import CounsellingUpdate from "./webPages/Admin/Counselling/Counselling";
import DisabilitySupportUpdate from "./webPages/Admin/DisabilitySupport/DisabilitySupport";
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
      
  
  
      <AuthProvider>
      <NavBar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/browseAllHelp"><Charities /></Route>
          <Route path="/allServicesMap"><AllServicesMap /></Route>
          <Route path="/crisisHelp"><Help /></Route>
          <Route path="/contactUs"><ContactUs /></Route>
          <Route path="/searchHelp"><SearchHelp/></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/forgotPassword"><ForgotPassword /></Route>
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute exact path="/UpdateAdminUsers" component={UpdateAdminUsers} />
          <PrivateRoute exact path="/UpdateDatabaseTable" component={UpdateDatabaseTable} />
          <PrivateRoute exact path="/UpdateProfileDash" component={UpdateProfileDash} />
          <PrivateRoute exact path="/Signup" component={Signup} />


          <Route path="/communitySupportMap"><CommunitySupportMap /></Route>
          <Route path="/hospitalSupportMap"><HospitalSupportMap /></Route>
          <Route path="/addictionSupportMap"><AddictionSupportMap /></Route>
          <Route path="/benefitsSupportMap"><BenefitsSupportMap /></Route>
          <Route path="/bereavementSupportMap"><BereavementSupportMap /></Route>
          <Route path="/cancerSupportMap"><CancerSupportMap /></Route>
          <Route path="/carersSupportMap"><CarersSupportMap /></Route>
          <Route path="/counsellingSupportMap"><CounsellingSupportMap /></Route>
          <Route path="/disabilitySupportMap"><DisabilitySupportMap /></Route>
          <Route path="/ethnicMinoritySupportMap"><EthnicMinoritySupportMap /></Route>
          <Route path="/familyChildcareSupportMap"><FamilyChildcareSupportMap /></Route>
          <Route path="/heartDiseaseSupportMap"><HeartDiseaseSupportMap /></Route>
          <Route path="/homelessnessSupportMap"><HomelessnessSupportMap /></Route>
          <Route path="/mentalHealthSupportMap"><MentalHealthSupportMap /></Route>
          <Route path="/oldPersonSupportMap"><OldPersonSupportMap /></Route>
          <Route path="/relationshipSexualitySupportMap"><RelationshipSexualitySupportMap /></Route>
          <Route path="/sexOrientationTransGroupsSupportMap"><SexOrientationTransGroupsSupportMap /></Route>
          <Route path="/violenceTraumaSupportMap"><ViolenceTraumaSupportMap /></Route>
          <Route path="/womenSupportMap"><WomenSupportMap /></Route>
          <Route path="/youngPeopleSupportMap"><YoungPeopleSupportMap /></Route>
          




          <Route path="/addictionSupport"><AddictionView /></Route>
          <Route path="/benefitSupport"><BenefitView /></Route>
          <Route path="/bereavementSupport"><BereavementView /></Route>
          <Route path="/cancerSupport"><CancerSupportView /></Route>
          <Route path="/carerSupport"><CarerSupportView /></Route>
          <Route path="/chronicConditions"><ChronicConditions /></Route>
          <Route path="/communityOrganisation"><CommunityOrganisationView /></Route>
          <Route path="/counsellingSupport"><CounsellingView /></Route>
          <Route path="/disabilitySupport"><DisabilitySupportView /></Route>
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
          

          <PrivateRoute exact path="/updateAddiction" component={AddictionUpdate} />
          <PrivateRoute exact path="/updateBenefits" component={BenefitsUpdate} />
          <PrivateRoute exact path="/updateBereavement" component={BereavementUpdate} />
          <PrivateRoute exact path="/updateCancerSupport" component={CancerSupportUpdate} />
          <PrivateRoute exact path="/updateCarers" component={CarersUpdate} />
          <PrivateRoute exact path="/updateCommunityOrganisations" component={CommunityOrganisationsUpdate} />
          <PrivateRoute exact path="/updateChronicConditions" component={ChronicConditionsUpdate} />
          <PrivateRoute exact path="/updateCounselling" component={CounsellingUpdate} />
          <PrivateRoute exact path="/updateDisabilitySupport" component={DisabilitySupportUpdate} />
          <PrivateRoute exact path="/updateOldPersonSupport" component={OldPersonSupportUpdate} />
          <PrivateRoute exact path="/updateEthnicMinoritySupport" component={EthnicMinoritySupportUpdate} />
          <PrivateRoute exact path="/updateFamilyChildcareSupport" component={FamilyChildcareSupportUpdate} />
          <PrivateRoute exact path="/updateHeartCirculatoryDisease" component={HeartCirculatoryDiseaseUpdate} />
          <PrivateRoute exact path="/updateHelplines" component={HelplinesUpdate} />
          <PrivateRoute exact path="/updateHomelessness" component={HomelessnessUpdate} />
          <PrivateRoute exact path="/updateMentalHealth" component={MentalHealthUpdate} />
          <PrivateRoute exact path="/updateRelationshipSexualitySupport" component={RelationshipSexualitySupportUpdate} />
          <PrivateRoute exact path="/updateSexOrientationTransGroups" component={SexOrientationTransGroupsSupportUpdate} />
          <PrivateRoute exact path="/updateViolenceTraumaSupport" component={ViolenceTraumaSupportUpdate} />
          <PrivateRoute exact path="/updateWomenSupport" component={WomenSupportUpdate} />
          <PrivateRoute exact path="/updateYoungPeopleSupport" component={YoungPeopleSupportUpdate} />
          
          
          


        </Switch>
      </AuthProvider>
      </div>
  
      
      
  );
}




