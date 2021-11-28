import ReactDOM from "react-dom";
import { useState } from "react";

import React from "react";
import ContactForm from "./ContactForm";
import Home from "./Home";
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { createTheme } from "@mui/material/styles";
import {Typography} from '@material-ui/core'; 
import Grid from './components/Grid'
import Footer from './components/Footer'
import{ init } from 'emailjs-com';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
init("user_sg6N53jdpPfJ9d2oTOpFK");








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
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 300,
      lineHeight: '2rem',
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
   
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})



export default function App() {
  const classes = styles(); 




  return (


    <div className ="container">
        
    <div className="App">
    <ThemeProvider theme={theme}>
          
          <div className={classes.wrapper}>
            <Typography variant="h4" className={classes.bigSpace} color="primary">
               Forward south Partnership
            </Typography>



<ContactForm/>


</div>
</ThemeProvider> 
</div>
<Footer/>
</div>

  );
}

