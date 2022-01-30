import React from "react";
import { MenuList } from "./AdminOptions";
import MenuItem from "./AdminItem";
import "./Menu.css";
import "../../App.css"
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import { auth } from "../LoginIn/firebase-config";
import {
  signOut,
} from "firebase/auth";
import { useHistory } from "react-router-dom";

function Menu() {

  const history = useHistory()

  const logout = async () => {
    await signOut(auth);
  };
  const handleClick = async () => {
    history.push("/users");
  };

  const btnstyle = { margin: '8px 0' }
  return (
    <div className="background">
      <div className="container">
        <div className="menu">
          <h1 className="menuTitle">Hello Admin!</h1>
          <div className="menuList">
            {MenuList.map((menuItem, key) => {
              return (
                <MenuItem
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                />
                 );
            })}
            
          </div>
        </div>
        <Button onClick={logout} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign out</Button>

      </div>
    </div>
  );
}

export default Menu;
