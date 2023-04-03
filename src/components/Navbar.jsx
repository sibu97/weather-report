import React from 'react'
import './css/navbar.css'
import Logo from '../accests/weather-app.png'
const Navbar = () => {
  return (
    <div className='brand' style={{marginTop:0,
        height:'60px',
        width:'100%',
        backgroundColor: '#74EBD5',
        backgroundImage: 'linear-gradient(90deg, #74ABD5 0%, #9F9CE6 100%)',
          boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}>
      <img alt='brndlogo' src={Logo} style={{padding:'5px '}}/>
          <h1 style={{color:'ButtonShadow',fontFamily:'sans-serif',fontSize:'30px'}}>Weather Report</h1>
      
      
      </div>
  )
}

export default Navbar;