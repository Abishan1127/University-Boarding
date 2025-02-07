import React from "react";
import { useParams } from "react-router-dom";
import "./Boarding.css";

const boardingData: { [key: string]: { name: string; description: string; price: string; location: string } } = {
  kelaniya: { name: "Kelaniya Boarding", description: "Affordable and close to campus.", price: "LKR 15,000/month", location: "Kelaniya" },
  sliate: { name: "SLIATE Boarding", description: "Comfortable stays near SLIATE.", price: "LKR 10,000/month", location: "Dehiwala" },
  colombo: { name: "Colombo Boarding", description: "Luxury accommodation in Colombo.", price: "LKR 25,000/month", location: "Colombo" },
  peradeniya: { name: "Peradeniya Boarding", description: "Peaceful environment near campus.", price: "LKR 12,000/month", location: "Peradeniya" },
  jayawardenepura: { name: "Jayewardenepura Boarding", description: "Budget-friendly rooms.", price: "LKR 8,000/month", location: "Nugegoda" },
};

const BoardingDetails: React.FC = () => {
  const { university } = useParams<{ university: string }>();
  const details = boardingData[university || "kelaniya"];

  if (!details) {
    return <h2>Boarding details not found.</h2>;
  }

  return (
    <div className="boarding-container">
      <h2 className="boarding-title">{details.name}</h2>
      <p className="boarding-description">{details.description}</p>
      <p className="boarding-price">Price: {details.price}</p>
      <p className="boarding-location">Location: {details.location}</p>
    </div>
  );
};

export default BoardingDetails;
