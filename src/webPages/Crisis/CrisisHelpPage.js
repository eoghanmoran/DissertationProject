import React from "react";
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { createTheme } from "@mui/material/styles";
import { Typography } from '@material-ui/core';
import Footer from '../../components/Footer'
import CrisisHelpDetails from './CrisisHelpDetails';
import '../../App.css';
import logo from '../../../src/images/logosmall.png';
import Charities from "../BrowseAllHelp/BrowseAllHelpDetails";


const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
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
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})
export default function crisisHelp() {

  const classes = styles();


  return (
    <div className="background">
      <div className="container">
        <div className="App">
          <ThemeProvider theme={theme}>
            <div className={classes.wrapper}>
              <div className="logo">
                <img src={logo} alt="this is a logo image" />
              </div>
              <Typography variant="h4" className={classes.bigSpace} color="primary">
                Forward south Partnership
              </Typography>
              <CrisisHelpDetails />
            </div>
          </ThemeProvider>
        </div>
        <Footer />
      </div>
    </div>
  );
} 
