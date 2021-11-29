import searchpicture from "./searchhelp2.png";
import './App.css';
import React from "react";
import {  makeStyles } from '@material-ui/styles';
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {Typography} from '@material-ui/core'; 

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
  


export default function searchHelp() {
    const classes = styles(); 

    return (

<div>

    <Typography variant="h6" className={classes.menuItem}>
                <Link to= "/browseAllHelp">  Or you can click here to Browse all help Available </Link>
                </Typography> 


   
</div>

    )

}

