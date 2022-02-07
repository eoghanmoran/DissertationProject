import React, { useState } from "react";
import Logo from "../../src/images/logosmall.png"
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/searchHelp"> Search Help </Link>
                    <Link to="/supportMap"> Support Map </Link>
                    <Link to="/crisisHelp"> Crisis Help </Link>
                    <Link to="/contactUs"> Contact </Link>
                    <Link to="/admin"> Admin </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/searchHelp"> Search Help </Link>
                <Link to="/supportMap"> Support Map </Link>
                <Link to="/crisisHelp"> Crisis Help </Link>
                <Link to="/contactUs"> Contact </Link>
                <Link to="/admin"> Admin </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
