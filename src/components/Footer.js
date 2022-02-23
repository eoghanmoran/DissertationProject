import React from 'react'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import '../App.css';


import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
    return (
        
        <BottomNavigation >
          <a href="https://twitter.com/SouthBelfastPB?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>}/> </a> 
         <a href = "https://www.facebook.com/SouthBelfastPartnership/"><BottomNavigationAction label="Facebook" value="nearby" icon={<FacebookIcon  style={{fill: " #1DA1F2"}}/>} /> </a>
         <a href="https://www.youtube.com/channel/UCU7YmFwD-0HO4KKa4GWvHPA"><BottomNavigationAction label="YouTube" value="folder" icon={<YouTubeIcon  style={{fill: "#c4302b"}}/>}/> </a> 
        </BottomNavigation>
      
  

      
)
}

export default Footer