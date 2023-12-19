import React from 'react'
import './Card.css'

const Cards = ({children, bg}) => {



  return (
    <div className='cardContainer' >
      <div className='cards' style={{background: bg}}>

        {children}
      </div>
  
    </div>
  )
}

export default Cards
