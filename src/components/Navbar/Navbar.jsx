import React from 'react'
import cloud from './cloud.png'
import cube from './cube.png'
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className='Navigation'>
    
    <div navmenuContainer>
    <div>
        <img src={cloud} alt="cloud" className='cloud'/>
      </div>

      <div>
        <img src={cube} alt="" />
      </div>
    
      <div>
             <img src={cube} alt="" />
      </div>
      <div>
             <img src={cube} alt="" />
      </div>
      <div>
             <img src={cube} alt="" />
      </div>
      <div>
             <img src={cube} alt="" />
      </div>
      <div>
             <img src={cube} alt="" />
      </div>
    </div>
      
      <div className="avatar">
        <p>DK</p>
      </div>

    </div>


  )
}

export default Navbar
