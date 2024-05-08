import React, { useState, useEffect } from "react";
import TestimonialCard from "../../../components/UI/TestimonialCard";
import "./style/testimonial.css"

function Testimonial() {
  const [user, setUser] = useState([]);
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
        <h2>Testimonial</h2>
      <div className="row testimonial-container">
        {user.map(el => {
            return <TestimonialCard key={el.login.uuid} user = {el}/>
        })}
      </div>
    </section>
  );
}

export default Testimonial;
