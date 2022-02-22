import * as React from 'react';
import "../../App.css"
import "./Menu.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { auth } from "../LoginIn/firebase-config";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import {
  signOut,
} from "firebase/auth";

const logout = async () => {
  await signOut(auth);
};
const btnstyle = { margin: '8px 0' }


function App() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `<Grid container spacing={${spacing}}>`;

  return (
    <div className="background">
      <div className="container">

        <div className="menu">
        
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Addiction
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Addiction Services Table
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/updateAddiction"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>


          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Benefits
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Benefits Services Table
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/updateBenefits"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bereavement
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Bereavement Services Table
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/UpdateAdminUsers"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>
          
        </div>
       
      </div>
    </div>
  );
}

export default App;
