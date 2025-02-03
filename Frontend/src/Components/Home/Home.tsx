
import React from "react";
import "./Home.css"; 
import { useNavigate } from "react-router-dom";
import kelaniyaImg from "../../assets/kelani.jpg";
import sliateImg from "../../assets/1717179630_image_192.jpg";
import colomboImg from "../../assets/colombo.jpg";
import peradeniyaImg from "../../assets/peradeniya.jpeg";
import sri_jayawardenepuraImg from "../../assets/1.-University-of-Sri-Jayawardanepura.jpg";
import moratuwaImg from "../../assets/UoM.jpg";
import jaffnaImg from "../../assets/Jaffn-Uni.jpg";
import ruhunaImg from "../../assets/rukunu.jpg";
import easternImg from "../../assets/eastern.jpg";
import southeasternImg from "../../assets/south eastern.jpeg";
import rajarataImg from "../../assets/rajaratta.jpg";
import sabaragamuwaImg from "../../assets/SABARAGAMUWA_UNIVERSITY_OF_SRI_LANKA_-_panoramio.jpg";


const universities = [
  { name: "University of Kelaniya", img: kelaniyaImg },
  { name: "SLIATE - Dehiwala", img: sliateImg },
  { name: "University of Colombo", img: colomboImg },
  { name: "University of Peradeniya", img: peradeniyaImg },
  { name: "University of Sri Jayewardenepura", img: sri_jayawardenepuraImg },
  { name: "University of Moratuwa", img: moratuwaImg },
  { name: "University of Jaffna", img: jaffnaImg },
  { name: "University of Ruhuna", img: ruhunaImg },
  { name: "Eastern University, Sri Lanka", img: easternImg },
  { name: "South Eastern University of Sri Lanka", img: southeasternImg },
  { name: "Rajarata University of Sri Lanka", img: rajarataImg },
  { name: "Sabaragamuwa University of Sri Lanka", img: sabaragamuwaImg },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (universityName: string) => {
    const formattedName = universityName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/boarding/${formattedName}`);
  };

  return (
    <div className="home-container">
      <h1>Find Your Perfect Place - Anywhere In Sri Lanka!</h1>
      <p>Search by city, region, or even university/workplace.</p>
      <div className="grid-container">
        {universities.map((uni, index) => (
          <div key={index} className="card" onClick={() => handleClick(uni.name)}>
            <img src={uni.img} alt={uni.name} />
            <p className="uni-name">{uni.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

