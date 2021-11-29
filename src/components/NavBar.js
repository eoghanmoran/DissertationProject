import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.jpeg'
import logoMobile from '../logo.jpeg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/styles"; 
import { padding } from '@mui/system';
import { Link } from 'react-router-dom';

const styles = makeStyles({
    bar:{
        paddingTop: "1rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "6%", 
        paddingRight: "10rem",
        ['@media (max-width:780px)']: { 
           display: "none",
           padding: "5rem"

           }
    },
    logoMobile:{
        width: "30%", 
        display: "none", 
        padding: "1rem",

        ['@media (max-width:780px)']: { 
            display: "inline-block",
            
            }
    },
    menuItem: {
        cursor: "pointer", 
        borderBlockColor: "black",
        flexGrow: 1,
        "&:hover": {
            color:  "#e91e63"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem" ,
       
        }
    }
})

export default function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo} alt = "Forward south logo"/> 
                <img src={logoMobile} className={classes.logoMobile}/> 

                

                <Typography variant="h6" className={classes.menuItem}>
                <Link to= "/">  Home </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <Link to= "/searchHelp">  Search </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <Link to= "/supportMap">   Support Map </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <Link to= "/crisisHelp">   Crisis help </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <Link to= "/contactUs">    Contact Us </Link>
                </Typography>
            </Toolbar>
    )
}
