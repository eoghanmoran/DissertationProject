import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { createTheme } from "@mui/material/styles";
import { Typography } from '@material-ui/core';
import Grid from "../../components/Grid"
import Footer from "../../components/Footer"
import "../../App.css";
//changes to imports 
import ElderlyOutlinedIcon from '@mui/icons-material/ElderlyOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


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
              <Link to="/crisisHelp"><Grid icon={<ContactPhoneOutlinedIcon style={{ fill: "#000000", height: "125", width: "125" }} />} btnTitle="Crisis Support" /> </Link>
            </div>

            <div className={`${classes.grid} ${classes.bigSpace}`}>
              <Link to="/browseAllHelp"> <Grid icon={<ElderlyOutlinedIcon style={{ fill: "#000000", height: "125", width: "125" }} />} btnTitle="Carer Support" /> </Link>
              <Link to="/searchHelp">  <Grid icon={<FavoriteBorderOutlinedIcon style={{ fill: "#000000", height: "125", width: "125" }} />}  btnTitle="Heart Disease Support" /> </Link>
              
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