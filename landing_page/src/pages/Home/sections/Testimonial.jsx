import React, { useState, useEffect } from "react";
import TestimonialCard from "../../../components/UI/TestimonialCard";
import "./style/testimonial.css"
import { useInView } from "react-intersection-observer";

function Testimonial() {
  const [user, setUser] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const fetchUser = () => {
    fetch("https://randomuser.me/api?results=4")
      .then((response) => {
        if (!response.ok) {
          throw new Error("error fetching data");
        }
        return response.json();
      })
      .then((data) => setUser(data.results))
      .catch((error) => {
        console.error("error fetching data", error);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <section className="testimonial">
        <h2 ref={ref} className={`visible ${isVisible ? 'animate' : ""}`}>Testimonial</h2>
      <div className="row testimonial-container">
        {user.map(el => {
            return <TestimonialCard key={el.login.uuid} user = {el}/>
        })}
      </div>
    </section>
  );
}

export default Testimonial;
