import React from 'react'
import './featurecard.css'

function FeatureCard({cardData}) {
  return (
    <div className="feature-card">
        {cardData.svg }
        <h3>{cardData.title}</h3>
        <p>{cardData.para}</p>
        <button>{cardData.btn}</button>
    </div>
  )
}

export default FeatureCard