import React from "react";
import { useParams } from "react-router-dom";
import "./Boarding.css";

// Sample boarding data
const boardingData: { [key: string]: string } = {
  "university-of-kelaniya": "Boarding details for University of Kelaniya...",
  "sliate-dehiwala": "Boarding details for SLIATE - Dehiwala...",
  "university-of-colombo": "Boarding details for University of Colombo...",
  "university-of-peradeniya": "Boarding details for University of Peradeniya...",
  "university-of-sri-jayewardenepura": "Boarding details for University of Sri Jayewardenepura...",
  "university-of-moratuwa": "Boarding details for University of Moratuwa...",
  "university-of-jaffna": "Boarding details for University of Jaffna...",
  "university-of-ruhuna": "Boarding details for University of Ruhuna...",
  "eastern-university-sri-lanka": "Boarding details for Eastern University, Sri Lanka...",
  "south-eastern-university-of-sri-lanka": "Boarding details for South Eastern University of Sri Lanka...",
  "rajarata-university-of-sri-lanka": "Boarding details for Rajarata University of Sri Lanka...",
  "sabaragamuwa-university-of-sri-lanka": "Boarding details for Sabaragamuwa University of Sri Lanka...",
};

const BoardingDetails: React.FC = () => {
  const { university } = useParams<{ university: string }>();
  const details = boardingData[university || ""] || "No details available.";

  return (
    <div className="boarding-container">
      <h1>Boarding Details</h1>
      <p>{details}</p>
    </div>
  );
};

export default BoardingDetails;
