import React from 'react'
import FeatureBooks from './FeatureBooks'
import "../styles/Body.css"

import Category from './Category'

const Body = () => {
  return (
    <>
    <div className="body-container">
        <div className="body-wrapper">
            <FeatureBooks/>
            <Category category={"Self-help"}/>
            <Category category={"Fiction"}/>
            <Category category={"Mystery"}/>
            <Category category={"Fantasy"}/>
            <Category category={"Romance"}/>
            <Category category={"Non-Fiction"}/>
            
        </div>
    </div>
    
    </>
    
  )
}

export default Body