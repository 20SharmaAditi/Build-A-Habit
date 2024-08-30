import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function App() {
  const navigate = useNavigate();

  const [hairRasDaily, setHairRasDaily] = useState(false);
  const [guttShuddhiMorning, setGuttShuddhiMorning] = useState(false);
  const [guttShuddhiEvening, setGuttShuddhiEvening] = useState(false);
  const [hairRasWeekly1, setHairRasWeekly1] = useState(false);
  const [hairRasWeekly2, setHairRasWeekly2] = useState(false);
  const [hairRasWeekly3, setHairRasWeekly3] = useState(false);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full flex flex-col">
      {/* <div className="bg-white p-4 w-full mt-16"> */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex items-center justify-between z-10">
        <button
          onClick={handleBackClick}
          className="text-black-500 flex items-center"
        >
          <IoArrowBack className="mr-2" />
        </button>
        <h1 className="text-xl font-bold">Daily Hair Routine</h1>
        <div></div> {/* Empty div for spacing */}
      </div>

      <div className="bg-white p-4 w-full mt-16 flex-1">
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Daily Dosage</h3>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/mJmJ92w/Hair-Ras.png"
                alt="Hair Ras"
                className="w-10 h-10 mr-2"
              />
              <p>Hair Ras</p>
            </div>
            <p className="text-sm text-gray-500">ONCE DAILY</p>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={hairRasDaily}
              onChange={() => setHairRasDaily(!hairRasDaily)}
            />
            <p>1 Tablet (Morning)</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Gutt Shuddhi</h3>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/594zB8k/Gutt-Shuddhi.png"
                alt="Gutt Shuddhi"
                className="w-10 h-10 mr-2"
              />
              <p>Gutt Shuddhi</p>
            </div>
            <p className="text-sm text-gray-500">TWICE DAILY</p>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={guttShuddhiMorning}
              onChange={() => setGuttShuddhiMorning(!guttShuddhiMorning)}
            />
            <p>1 Tablet (Morning)</p>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={guttShuddhiEvening}
              onChange={() => setGuttShuddhiEvening(!guttShuddhiEvening)}
            />
            <p>1 Tablet (Evening)</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Weekly Dosage</h3>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/mJmJ92w/Hair-Ras.png"
                alt="Hair Ras"
                className="w-10 h-10 mr-2"
              />
              <p>Hair Ras</p>
            </div>
            <p className="text-sm text-gray-500">USE 3 TIMES A WEEK</p>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={hairRasWeekly1}
              onChange={() => setHairRasWeekly1(!hairRasWeekly1)}
            />
            <p>1 Tablet (1st time)</p>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={hairRasWeekly2}
              onChange={() => setHairRasWeekly2(!hairRasWeekly2)}
            />
            <p>1 Tablet (2nd time)</p>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={hairRasWeekly3}
              onChange={() => setHairRasWeekly3(!hairRasWeekly3)}
            />
            <p>1 Tablet (3rd time)</p>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
          Set Daily Reminder
        </button>
        <p className="text-sm text-gray-500 mt-4 cursor-pointer">Read FAQs</p>
        <p className="text-sm text-gray-500 mt-2 cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </div>
    // </div>
  );
}

export default App;
