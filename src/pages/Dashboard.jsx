import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Mainbar from '../components/Mainbar/Mainbar'
import './Dashboard.css'


const Dashboard = () => {
  return (
    <div className="container">

    <div className='mainContainer'>
        <div className="navbarContainer">

    <Navbar></Navbar>
        </div>
        <div className="dashboardContainer">

    <Mainbar></Mainbar>
        </div>
      
    </div>
    </div>
  )
}

export default Dashboard
