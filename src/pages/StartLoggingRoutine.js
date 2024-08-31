import React from "react";
import { useNavigate } from "react-router-dom";

const StartLoggingRoutine = () => {
  const navigate = useNavigate();

  const goToLogRoutine = () => {
    navigate("/log-routine");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <div className="relative bg-[#DAEBF1] p-8 rounded-xl shadow-lg w-80 text-center">
        <div className="absolute -top-[45px] left-1/2 transform -translate-x-1/2  rounded-full p-4">
          <img
            src="https://oextech.blr1.digitaloceanspaces.com/Website%5Boex%5D/brandLogo/star.png"
            alt="star"
            width={70}
            height={70}
            className="cover"
          />
        </div>
        <h2 className="mt-8 mb-4 text-xl font-bold text-gray-700">
          Start Daily Hair Routine to Earn Discounts!
        </h2>
        <div className="bg-white p-4 rounded-lg flex items-center justify-center gap-4 shadow-md mb-6">
          <img
            src="https://oextech.blr1.digitaloceanspaces.com/Website%5Boex%5D/brandLogo/discount.png"
            alt="Discount"
            className="w-12 h-12 mr-4"
          />
          <p className="text-md text-gray-600 font-bold ">Get upto 20% off</p>
        </div>
        <button
          onClick={goToLogRoutine} // Attach the onClick handler here
          className="w-full bg-gray-700 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-900 transition duration-300"
        >
          + START ROUTINE
        </button>
      </div>
    </div>
  );
};

export default StartLoggingRoutine;
