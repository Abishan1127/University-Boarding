import React from "react";
import kelaniyaImg from "../../assets/1.-University-of-Sri-Jayawardanepura.jpg";
import sliateImg from "../assets/sliate.jpg";
import colomboImg from "../assets/colombo.jpg";

const universities = [
  { name: "University of Kelaniya", img: kelaniya.jpg },
  { name: "SLIATE - Dehiwala", img: "sliate.jpg" },
  { name: "University of Colombo", img: "colombo.jpg" },
  { name: "University of Peradeniya", img: "peradeniya.jpg" },
  { name: "University of Sri Jayewardenepura", img: "sri_jayawardenepura.jpg" },
  { name: "University of Moratuwa", img: "moratuwa.jpg" },
  { name: "University of Jaffna", img: "jaffna.jpg" },
  { name: "University of Ruhuna", img: "ruhuna.jpg" },
  { name: "Eastern University, Sri Lanka", img: "eastern.jpg" },
  { name: "South Eastern University of Sri Lanka", img: "southeastern.jpg" },
  { name: "Rajarata University of Sri Lanka", img: "rajarata.jpg" },
  { name: "Sabaragamuwa University of Sri Lanka", img: "sabaragamuwa.jpg" },
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Find Your Perfect Place - Anywhere In Sri Lanka!</h1>
      <p className="text-gray-600 mb-6">
        Search by city, region, or even university/workplace. MyBodima.lk makes finding your ideal
        boarding accommodation convenient and hassle-free.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {universities.map((uni, index) => (
          <div key={index} className="relative group cursor-pointer">
            <img src={`/assets/${uni.img}`} alt={uni.name} className="rounded-lg shadow-md w-full h-48 object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-sm font-bold">
              {uni.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
