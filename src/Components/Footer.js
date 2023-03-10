import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Components/Styles/Footer.css'

export const Footer = () => {
  return (
    
    <div className='footer'>
     
        <div className='socialMedia'>
            <a href='https://github.com/Mferik' target="_blank"><GitHubIcon/></a>
            <a href="https://www.instagram.com/fatiheriik/" target="_blank"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/muhammet-fatih-erik-472b12214/" target="_blank"><LinkedInIcon/></a>
            
        </div>
        <p>Tüm Hakları Saklıdır | MFE's Pizzas </p>
    </div>
  )
}
