import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2>
          Why Choose <span>Unilanka.Lk</span> ?
        </h2>
        <p>
          Unilanka.lk is the trusted Sri Lankan platform for finding comfortable
          and affordable boarding places. We offer a diverse range of options,
          from budget-friendly hostels to modern apartments, all conveniently
          located throughout the country.
        </p>
        <p>
          We prioritize security with verified listings and secure booking. Our
          user-friendly platform and dedicated customer support ensure a smooth
          and stress-free booking experience for you.
        </p>
        <button className="read-more-btn">READ MORE</button>
      </div>

      <div className="reviews-section">
        <h3>Top Reviews</h3>
        <div className="review-card">
          <div className="review-location">
            📍 Colombo, Sri Lanka <span className="stars">★★★★★</span>
          </div>
          <div className="review-content">
            <img
              src="https://via.placeholder.com/60" // Replace with actual image URL
              alt="Reviewer"
              className="review-img"
            />
            <blockquote>
              “Unilanka.lk saved me so much stress when finding a place near my
              university. I loved being able to compare prices and find a safe,
              comfortable dorm within my budget.”
            </blockquote>
          </div>
          <p className="reviewer-name">~ Maya Silva ~</p>
        </div>
      </div>
    </section>
  );
};

export default About;
