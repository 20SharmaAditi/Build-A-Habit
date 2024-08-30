import React from "react";
import { useNavigate } from "react-router-dom";

const StartLoggingRoutine = () => {
  const navigate = useNavigate();

  const goToLogRoutine = () => {
    navigate("/log-routine");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="relative bg-blue-100 p-8 rounded-xl shadow-lg w-80 text-center">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 rounded-full p-4">
          {/* Replace with your icon or image */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.951.69h3.462c.969 0 1.371.871.5 1.698l-5.658 5.658a.5.5 0 01-.708.708l-1.539-1.539a.5.5 0 01.708-.708l5.658-5.658a1 1 0 00-.5-1.698H5.521a1 1 0 00-.951.69l-1.07 3.292c-.3.921-1.603.921-1.902 0l-1.07-3.292a1 1 0 00-.951-.69H.538a1 1 0 00-.5 1.698l5.658 5.658a.5.5 0 01.708.708l1.539-1.539a.5.5 0 01-.708-.708l-5.658-5.658a1 1 0 00-.5-1.698h3.462a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <h2 className="mt-8 mb-4 text-xl font-bold text-gray-700">
          Start Daily Hair Routine to Earn Discounts!
        </h2>
        <div className="bg-white p-4 rounded-lg flex items-center justify-center shadow-md mb-6">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/19/17/17/box-1086678_1280.jpg"
            alt="Discount"
            className="w-12 h-12 mr-4"
          />
          <p className="text-sm text-gray-600">Get upto 20% off</p>
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
