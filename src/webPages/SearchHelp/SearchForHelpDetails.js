import '../../App.css';
import React, { useState } from "react";
import { Dropdown, Option } from "../../Dropdown";
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from "@mui/material/styles";

const styles = makeStyles({
  wrapper: {
    width: "150%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    lineHeight: '4rem',
  },

  littleSpace: {
    marginTop: "2.5rem",
    lineHeight: '4rem',
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    lineHeight: '4rem',
  },
})

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

export default function SearchHelp() {
  const classes = styles();
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };
  return (

    <div>

      <ThemeProvider theme={theme}>
        <h1>Which service are you interested in?</h1>
        <Typography variant="h6" className={classes.menuItem}>
          <div classname="dropdown">
            <Dropdown
              formLabel="Choose a service"
              buttonText="Send form"
              onChange={handleSelect}
              action="https://prototype-c7bf5.web.app/crisisHelp"
            >
              <Option selected value="Click to see options" />
              <Option value="Option 1" />
              <Option value="Option 2" />
              <Option value="Option 3" />
            </Dropdown>
          </div>

          <Link to="/browseAllHelp">  Or you can click here to Browse all help Available </Link>
        </Typography>

      </ThemeProvider>
    </div>
  )
}

