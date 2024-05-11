import React, {useState} from "react";
import "./testimonialcard.css";
import { useInView } from "react-intersection-observer";

function TestimonialCard({ user }) {
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
    <div ref={ref} className={`testimonial-card visible ${isVisible ? 'animate' : ""}`}>
      <img src={user.picture.large} alt="profile" />
      <div className="testimonial-text">
        <h3 className="testimonial-name">{user.name.first}</h3>
        <p className="comment">nice i like it</p>
        <span className="rate">⭐⭐⭐⭐⭐</span>
      </div>
    </div>
  );
}

export default TestimonialCard;
