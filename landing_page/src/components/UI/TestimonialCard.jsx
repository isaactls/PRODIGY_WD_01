import React from "react";
import "./testimonialcard.css";

function TestimonialCard({ user }) {
  return (
    <div className="testimonial-card">
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
