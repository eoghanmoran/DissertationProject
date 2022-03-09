import React, { Component } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Footer from '../../components/Footer';
import '../../App.css';
import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateEmail
} from "firebase/auth";
import { auth } from "./firebase-config";
import { useHistory } from "react-router-dom";
import { HistoryOutlined } from '@material-ui/icons';

function App() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    const history = useHistory()

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            history.push("/admin");
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const update = async () => {
        try {
            const user = await updateEmail(
                user,
                loginEmail
            );
            history.push("/admin");
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        history.push("/forgotPassword");
    };

    const paperStyle = { padding: 20, height: '60vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    return (
        <div className="background">
            <div className="container">
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align="center">
                            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                            <h2>Sign In</h2>
                        </Grid>

                        <TextField label='Email' placeholder='Enter Email' fullWidth required
                            onChange={(event) => {
                                setLoginEmail(event.target.value);
                            }}
                        />
                        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required
                            onChange={(event) => {
                                setLoginPassword(event.target.value);
                            }}
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <Button onClick={login} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                        <Button onClick={logout} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Forgot Password?</Button>

                        <Grid align="center">
     
                </Grid>
            </Paper>
        </Grid>
                
            </div >
        <Footer />
        </div >
    )

}
export default App;