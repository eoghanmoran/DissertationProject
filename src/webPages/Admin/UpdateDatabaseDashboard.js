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
              <Link to="/updateBereavement"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Carers
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Carer Services Table
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/updateCarers"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Community Organisations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Community Organisations Services Table
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/updateCommunityOrganisations"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Counselling
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Counselling Services Table
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/updateCounselling"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Disability Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Disability Support Services Table
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/updateDisabilitySupport"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cancer Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Cancer Support Services Table
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/updateCancerSupport"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Eating Disorders
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Eating Disorder Services Table
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/updateEatingDisorders"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Old Person Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Old Person Support Services Table
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/updateOldPersonSupport"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ethnic Minority Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Ethnic Minority Support Services Table
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/updateEthnicMinoritySupport"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Family Childcare Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Family Childcare Support Services Table
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/updateFamilyChildcareSupport"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Heart Circulatory Disease 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Heart Circulatory Disease Services Table
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/updateHeartCirculatoryDisease"><Button size="small">Update</Button></Link>
            </CardActions>
          </Card>


          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Admin
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update Admin Users Table
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
