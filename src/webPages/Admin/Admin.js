import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import "./Menu.css";
import { auth } from "../LoginIn/firebase-config";
import {
  signOut,
} from "firebase/auth";
import "../../App.css"
import Footer from '../../components/Footer'


export default function ImgMediaCard() {

  const logout = async () => {
    await signOut(auth);
  };

  const btnstyle = { margin: '8px 0' }

  return (
    <div className="background">
      <div className="container">
        <div className="menu">
          <div className="menuList">
            <h1 className="menuTitle">Hello Admin!</h1>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Update Database
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Select a database table you wish to update
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/UpdateDatabaseTable"><Button size="small">Update</Button></Link>
              </CardActions>
            </Card>


            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Update Admin Users
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Update/Add Admin users acccess privileges
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/UpdateProfileDash"><Button size="small">Update</Button></Link>
              </CardActions>
            </Card>
          </div>

        </div>
        <Button onClick={logout} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign out</Button>


      </div>
      <Footer/>
    </div>



  );
}
