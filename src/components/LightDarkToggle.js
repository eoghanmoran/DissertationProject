import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Switch from "@material-ui/core/Switch";
  
const useStyles = makeStyles((theme) => ({
  
  
    root: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
}));
  
export default function LightDarkToggle({ 
        toggleDark, settoggleDark }) {
  const classes = useStyles();
    
  // Trigger toggle using onChange Switch
  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };
  return (
          <Switch
            checked={toggleDark}
            onChange={handleModeChange}
            name="toggleDark"
            color="default"
          />
  );
}