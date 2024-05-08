import React, { useState } from 'react'
import "./style/features.css"
import { IoCarSport } from "react-icons/io5";
import FeatureCard from '../../../components/UI/FeatureCard';
import { FaPiggyBank } from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
function Features() {
  const [cardData] = useState([{
    title : 'Find Your Fit',
    para : "Not sure what you want? answet a few question to find what fits you best",
    btn : "start squiz",
    id : 1,
    svg: <IoCarSport className='feature-icons'/>
  },
  {
    title : "Shop by budget",
    para : "Save time and narrow down cars that fit your monthly payment and price point.",
    btn : "See your buying power",
    id: 2,
    svg: <FaPiggyBank className='feature-icons'/>
  },
  {
    title : "Build and Price",
    para: "Choose the make, the model, the trim, and options you want",
    btn : "Build Your Car",
    id: 3,
    svg: <FaBuilding className='feature-icons'/>
  },
  {
    title : "Sell and Trade",
    para : "Get an offer in a minut, then cash out or trade in",
    btn : "Learn more",
    id : 4,
    svg: <GiCarKey className='feature-icons'/>
  }
])
  return (
    <section className='features'>
        <div className='feature-containers row'>
          <h2 className='features-header'>features</h2>
          <div className="feature-cards-container">
            {cardData.map((e) =>{
              return <FeatureCard key={e.id} cardData={e}/>
            })}
          </div>
        </div>
    </section>
  )
}

export default Features