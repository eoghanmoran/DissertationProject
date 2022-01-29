import React, { useState } from "react";
//import LogoImg from "../images/logosmall.jpeg"
import LogoImg from "../images/logosmall.png";
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
} from "./Navbar.style.js"

function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/"> Home</NavbarLink>
                        <NavbarLink to="/searchHelp"> Search Help</NavbarLink>
                        <NavbarLink to="/supportMap"> Support Map</NavbarLink>
                        <NavbarLink to="/crisisHelp"> Crisis Help</NavbarLink>
                        <NavbarLink to="/contactUs"> Contact Us</NavbarLink>
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }}
                        >
                            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <Logo src={LogoImg}></Logo>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/searchHelp"> Search Help</NavbarLinkExtended>
                    <NavbarLinkExtended to="/supportMap"> Support Map</NavbarLinkExtended>
                    <NavbarLinkExtended to="/crisisHelp"> Crisis Help</NavbarLinkExtended>
                    <NavbarLinkExtended to="/contactUs"> Contact Us</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}

export default Navbar;
