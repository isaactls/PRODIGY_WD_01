import React, {useState }from 'react'
import './featurecard.css'
import { useInView } from 'react-intersection-observer'

function FeatureCard({cardData}) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div ref={ref} className={`feature-card visible ${isVisible ? 'animate' : ""}`}>
        {cardData.svg }
        <h3>{cardData.title}</h3>
        <p>{cardData.para}</p>
        <button>{cardData.btn}</button>
    </div>
  )
}

export default FeatureCard