import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { createTheme } from "@mui/material/styles";
import { Typography } from '@material-ui/core';
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import RoomIcon from '@mui/icons-material/Room';
import HelpIcon from '@mui/icons-material/Help';
import SearchIcon from '@mui/icons-material/Search';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import logo from './images/logosmall.png';


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


export default function Home() {

  const classes = styles();
  return (


    <div className="background">
      <div className="container">

        <div className="App">
          <ThemeProvider theme={theme}>

            <div className={classes.wrapper}>

              <Typography variant="h4" className={classes.bigSpace} color="primary">
                Forward South Partnership
              </Typography>
              <Typography variant="h5" className={classes.littleSpace} color="primary">

              </Typography>
            </div>
            <div className={`${classes.grid} ${classes.bigSpace}`}>
              <Link to="/crisisHelp"><Grid icon={<HelpIcon style={{ fill: "#e91e63", height: "125", width: "125" }} />} title="Crisis help" btnTitle="Show me More" /> </Link>

            </div>

            <div className={`${classes.grid} ${classes.bigSpace}`}>
              <Link to="/browseAllHelp"> <Grid icon={<MenuBookIcon style={{ fill: "#e91e63", height: "125", width: "125" }} />} title="Browse All" btnTitle="Show me More" /> </Link>
              <Link to="/searchHelp">  <Grid icon={<SearchIcon style={{ fill: "#4360A6", height: "125", width: "125" }} />} title="Search for help" btnTitle="Show me More" /> </Link>
              <Link to="/supportMap"><Grid icon={<RoomIcon style={{ fill: "#449A76", height: "125", width: "125" }} />} title="Support Map" btnTitle="Show me More" /> </Link>
              <Link to="/contactUs"> <Grid icon={<LocalPhoneIcon style={{ fill: "#00bcd4", height: "125", width: "125" }} />} title="Contact Us" btnTitle="Show me More" /> </Link>
              
            </div>
            <div className={`${classes.grid} ${classes.littleSpace}`}>

            </div>

          </ThemeProvider>
        </div>
        <Footer />
      </div>

    </div>

  );
}