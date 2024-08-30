import { useState, useEffect } from "react";
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

  const [isAnyChecked, setIsAnyChecked] = useState(false);

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    setIsAnyChecked(
      hairRasDaily ||
        guttShuddhiMorning ||
        guttShuddhiEvening ||
        hairRasWeekly1 ||
        hairRasWeekly2 ||
        hairRasWeekly3
    );
  }, [
    hairRasDaily,
    guttShuddhiMorning,
    guttShuddhiEvening,
    hairRasWeekly1,
    hairRasWeekly2,
    hairRasWeekly3,
  ]);

  return (
    <div className="bg-gray-100 min-h-screen w-full flex flex-col items-center">
      <div className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex items-center justify-between z-10">
        <button
          onClick={handleBackClick}
          className="text-black-500 flex items-center"
        >
          <IoArrowBack className="mr-2" />
        </button>
        <h1 className="text-xl font-bold">Daily Hair Routine</h1>
        <div></div>
      </div>

      <div className="bg-gray-100 flex-1 w-full pt-20 px-4">
        <div className="flex justify-center items-center w-full h-[375px] border border-md border-black mb-4 shadow-lg rounded-lg">
          Let's Begin!
        </div>
        <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
          <h3 className="text-xl font-bold mb-4">Daily Dosage</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-start justify-start pl-3">
              <p className="text-lg font-semibold mb-3">Hair Ras</p>
              <div className="relative flex justify-center items-center p-2 bg-gray-300 h-[60px] w-14 rounded-md shadow-md">
                <img
                  src="https://i.ibb.co/mJmJ92w/Hair-Ras.png"
                  alt="Hair Ras"
                  width={50}
                  height={50}
                  className="cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-md text-blue-400 mb-4">ONCE DAILY</p>
              <div className="flex items-center justify-between gap-4 border border-[1px] border-black rounded-md px-2 w-full relative group">
                <div className="absolute bg-black right-[180px] top-[50%] transform -translate-y-1/2 text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer w-[200px]">
                  <h4 className="text-sm text-blue-400 mb-2">WIN 100 COINS</h4>
                  <p className="text-white text-sm">
                    Did you take your morning supplement? Check the box if yes.
                  </p>
                </div>
                <p className="mr-2">1 Tablet (Morning)</p>
                <input
                  type="checkbox"
                  className="ml-auto cursor-pointer"
                  checked={hairRasDaily}
                  onChange={() => setHairRasDaily(!hairRasDaily)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-start justify-start pl-3">
              <p className="text-lg font-semibold mb-3 text-center">
                Gutt Shuddhi
              </p>
              <div className="relative flex justify-between items-start p-2 bg-gray-300 h-[60px] w-14 rounded-md shadow-md">
                <img
                  src="https://i.ibb.co/mJmJ92w/Hair-Ras.png"
                  alt="Hair Ras"
                  width={50}
                  height={50}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-md text-blue-400 mb-4">TWICE DAILY</p>
              <div className="flex items-center justify-between mb-3 border border-[1px] border-black rounded-md px-2 w-full relative group">
                <div className="absolute bg-black right-[180px] top-[50%] transform -translate-y-1/2 text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer w-[200px]">
                  <h4 className="text-sm text-blue-400 mb-2">WIN 100 COINS</h4>
                  <p className="text-white text-sm">
                    Did you take your morning supplement? Check the box if yes.
                  </p>
                </div>

                <p className="mr-2">1 Tablet (Morning)</p>
                <input
                  type="checkbox"
                  className="ml-auto cursor-pointer"
                  checked={guttShuddhiMorning}
                  onChange={() => setGuttShuddhiMorning(!guttShuddhiMorning)}
                />
              </div>

              <div className="flex items-center justify-between border border-[1px] border-black rounded-md px-2 w-full relative group">
                <div className="absolute bg-black right-[180px] top-[50%] transform -translate-y-1/2 text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer w-[200px]">
                  <h4 className="text-sm text-blue-400 mb-2">WIN 100 COINS</h4>
                  <p className="text-white text-sm">
                    Did you take your morning supplement? Check the box if yes.
                  </p>
                </div>

                <p className="mr-2">1 Tablet (Evening)</p>
                <input
                  type="checkbox"
                  className="ml-auto cursor-pointer"
                  checked={guttShuddhiEvening}
                  onChange={() => setGuttShuddhiEvening(!guttShuddhiEvening)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
          <h3 className="text-xl font-bold mb-4">Weekly Dosage</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-center justify-center pl-3">
              <p className="text-lg font-semibold mb-1 text-center">Hair Ras</p>
              <div className="relative flex justify-center items-center p-2 bg-gray-300 h-[60px] w-14 rounded-md shadow-md">
                <img
                  src="https://i.ibb.co/mJmJ92w/Hair-Ras.png"
                  alt="Hair Ras"
                  width={50}
                  height={50}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-md text-blue-400 mb-4">USE 3 TIMES A WEEK</p>

              <div className="flex items-center justify-between mb-2 border border-[1px] border-black rounded-md px-2 w-full relative group">
                <div className="absolute bg-black right-[180px] top-[50%] transform -translate-y-1/2 text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer w-[200px]">
                  <h4 className="text-sm text-blue-400 mb-2">WIN 100 COINS</h4>
                  <p className="text-white text-sm">
                    Did you take your supplement? Check the box if yes.
                  </p>
                </div>
                <p className="mr-2">1 Tablet (1st time)</p>
                <input
                  type="checkbox"
                  className="ml-auto"
                  checked={hairRasWeekly1}
                  onChange={() => setHairRasWeekly1(!hairRasWeekly1)}
                />
              </div>

              <div className="flex items-center justify-between mb-3 border border-[1px] border-black rounded-md px-2 w-full relative group">
                <div className="absolute bg-black right-[180px] top-[50%] transform -translate-y-1/2 text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer w-[200px]">
                  <h4 className="text-sm text-blue-400 mb-2">WIN 100 COINS</h4>
                  <p className="text-white text-sm">
                    Did you take your supplement? Check the box if yes.
                  </p>
                </div>
                <p className="mr-2">1 Tablet (2nd time)</p>
                <input
                  type="checkbox"
                  className="ml-auto"
                  checked={hairRasWeekly2}
                  onChange={() => setHairRasWeekly2(!hairRasWeekly2)}
                />
              </div>

              <div className="flex items-center justify-between mb-3 border border-[1px] border-black rounded-md px-2 w-full relative group">
                <div className="absolute bg-black right-[180px] top-[50%] transform -translate-y-1/2 text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer w-[200px]">
                  <h4 className="text-sm text-blue-400 mb-2">WIN 100 COINS</h4>
                  <p className="text-white text-sm">
                    Did you take your supplement? Check the box if yes.
                  </p>
                </div>

                <p className="mr-2">1 Tablet (3rd time)</p>
                <input
                  type="checkbox"
                  className="ml-auto"
                  checked={hairRasWeekly3}
                  onChange={() => setHairRasWeekly3(!hairRasWeekly3)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-4 rounded-lg shadow-sm gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mb-4">
            Set Daily Reminder
          </button>
          <a
            href="/#"
            target="_blank"
            className="text-lg text-blue-500 cursor-pointer"
          >
            Read FAQs
          </a>
          <a
            href="/#"
            target="_blank"
            className="text-lg text-blue-500 cursor-pointer"
          >
            Terms & Conditions
          </a>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mb-4 ${
              !isAnyChecked ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isAnyChecked}
          >
            Log Routine
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
