import React from "react";
import {  Route, Switch } from "react-router-dom";
import {  makeStyles } from '@material-ui/styles';
import { createTheme } from "@mui/material/styles";
import NavBar from './components/NavBar'
import './App.css';

import Charities from "./BrowseAllHelpPage";
import Help from "./CrisisHelpPage";
import Home from "./Home";
import Map from "./SupportMapPage";
import ContactDetails from "./ContactFormPage";
import SearchHelp from "./SearchForHelpPage";
import ContactUs from  "./ContactFormPage";



const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 25,
      lineHeight: '3rem',
      },
    h5: {
      fontWeight: 200,
      lineHeight: '3rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "100%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    lineHeight: '4rem',
  },
  
  littleSpace:{
    marginTop: "2.5rem",
    lineHeight: '4rem',
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
    lineHeight: '4rem',
  },
})


export default function App() {
  <Home/>


  //const classes = styles(); 
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




