import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Contact.css'


function Contact() {
  return (
    <>
    <div className='socialMedia'>
    <a href='https://www.facebook.com/A.Janchiv' className='facebook'>
      <FacebookOutlinedIcon color='primary' sx={{ fontSize: 55 }}/>
    </a>
    <a href='https://www.linkedin.com/in/janchiv-ariunjingiin-5365a61a9/' className='linkedin'>
    <LinkedInIcon color='secondary' sx={{ fontSize: 55 }}/>
    </a>
    <a href='https://twitter.com/A_Jaak' className='twitter'>
    <TwitterIcon color='success' sx={{ fontSize: 55 }}/>
    </a>
    <a href='https://www.pinterest.com/jaakjanchiv/_saved/' className='pinterest'>
    <PinterestIcon color='action' sx={{ fontSize: 55 }}/>
    </a>
    <a href='https://www.instagram.com/janchiv_ariun/' className='instagram'>
    <InstagramIcon color='disabled' sx={{ fontSize: 55 }}/>
    </a>
    </div>
    </>
  )
}
export default Contact