import React, { useEffect, useState } from 'react'
import './Nav.css'
import logo from './netflix-logo.png'

function Nav() {
  const [show, handleshow] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        if(window.scrollY>100){
            handleshow(true);
        }
        else{
            handleshow(false);
        };
        return ()=>{
            window.removeEventListener('scroll', null);
        }
    });
  },[])


  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo' src={logo} alt="Netflifx Logo"/>
        <img className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt="Netflifx Avatar"/>
    </div>
  )
}

export default Nav