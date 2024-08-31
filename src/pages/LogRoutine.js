import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import ModalPopup from "../components/howToRedeemCoins";
import Lottie from "lottie-react";
import celebrate from "../animations/celebrate.json";

import "../App.css";

function App() {
  const navigate = useNavigate();

  const [hairRasDaily, setHairRasDaily] = useState(false);
  const [guttShuddhiMorning, setGuttShuddhiMorning] = useState(false);
  const [guttShuddhiEvening, setGuttShuddhiEvening] = useState(false);
  const [hairRasWeekly1, setHairRasWeekly1] = useState(false);
  const [hairRasWeekly2, setHairRasWeekly2] = useState(false);
  const [hairRasWeekly3, setHairRasWeekly3] = useState(false);

  const [isAnyChecked, setIsAnyChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);

  function addElement(arr, element) {
    if (!arr.includes(element)) {
      setSelectedItems([...arr, element]);
    }
  }

  function removeElement(arr, element) {
    setSelectedItems(arr.filter((item) => item !== element));
  }

  const handleHairRasDailyCheckBox = () => {
    if (hairRasDaily) {
      removeElement(selectedItems, "Hair Ras");
    } else {
      addElement(selectedItems, "Hair Ras");
    }

    setHairRasDaily(!hairRasDaily);
  };

  const handleGuttShuddhiMorningCheckBox = () => {
    if (guttShuddhiMorning) {
      removeElement(selectedItems, "Gutt Suddhi");
    } else {
      addElement(selectedItems, "Gutt Suddhi");
    }

    setGuttShuddhiMorning(!guttShuddhiMorning);
  };

  const handleGuttShuddhiEveningCheckBox = () => {
    if (guttShuddhiEvening) {
      removeElement(selectedItems, "Gutt Suddhi");
    } else {
      addElement(selectedItems, "Gutt Suddhi");
    }

    setGuttShuddhiEvening(!guttShuddhiEvening);
  };

  const handleHairWeeklyOneCheckBox = () => {
    if (hairRasWeekly1) {
      removeElement(selectedItems, "Hair Ras");
    } else {
      addElement(selectedItems, "Hair Ras");
    }

    setHairRasWeekly1(!hairRasWeekly1);
  };

  const handleHairWeeklyTwoCheckBox = () => {
    if (hairRasWeekly2) {
      removeElement(selectedItems, "Hair Ras");
    } else {
      addElement(selectedItems, "Hair Ras");
    }

    setHairRasWeekly2(!hairRasWeekly2);
  };

  const handleHairWeeklyThreeCheckBox = () => {
    if (hairRasWeekly3) {
      removeElement(selectedItems, "Hair Ras");
    } else {
      addElement(selectedItems, "Hair Ras");
    }

    setHairRasWeekly3(!hairRasWeekly3);
  };

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

  const handleLogRoutineClick = () => {
    if (!isCelebrating) {
      setIsCelebrating(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setIsCelebrating(false);
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setShowReward(true);
        }, 3000);
      }, 5000);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowReward(true);
      }, 3000);
    }
  };

  const handleTncClick = () => {
    navigate("/tnc");
  };

  const handleFaqClick = () => {
    navigate("/faq");
  };

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="bg-white min-h-screen w-full flex flex-col items-center lg:px-8 lg:py-12 overflow-hidden">
      <div className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex items-center justify-between z-20">
        <button
          onClick={handleBackClick}
          className="text-black-500 flex items-center"
        >
          <IoArrowBack className="mr-2" />
        </button>
        <h1 className="text-xl font-bold">Daily Hair Routine</h1>
        <div></div>
      </div>

      <div className="bg-white flex-1 w-full pt-20 px-4">
        <div className="relative flex justify-center items-center w-full h-[375px] bg-[#DAEBF1] border border-md mb-4 shadow-lg rounded-lg">
          {isLoading ? (
            <div className="relative flex items-center justify-center">
              <div className="loader border-t-8 border-[#A1BD13] rounded-full w-20 h-20 animate-spin text-center font-bold text-black"></div>
              <div className="absolute text-center text-black font-bold">
                Loading
              </div>
            </div>
          ) : showReward ? (
            <div
              className={`flex flex-col items-center justify-center w-full h-full ${
                showReward ? "slide-in" : ""
              }`}
            >
              <div className="flex items-center justify-center w-full mb-8 relative">
                <div className="absolute top-1/2 lg:left-[40%] left-[20%] lg:right-[40%] right-[19%] border-t-4 border-blue-500 z-0 border-dotted"></div>
                <div className="flex flex-col items-center z-10">
                  <span className="text-blue-500 font-bold mb-3">+100</span>
                  <div className="flex items-center justify-center bg-blue-200 h-8 w-8 rounded-full shadow-md mt-4">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <span className="text-md font-semibold text-black p-4 bg-blue-300 rounded-b-[100px]">
                    TODAY
                  </span>
                </div>

                <div className="flex flex-col items-center mx-8 z-10">
                  <div className="flex items-center justify-center bg-gray-200 h-8 w-8 rounded-full shadow-md mt-14"></div>
                  <span className="text-md font-semibold text-black p-4 bg-blue-300 rounded-b-[100px]">
                    19 JUL
                  </span>
                </div>

                <div className="flex flex-col items-center z-10">
                  <span className="text-black font-bold">Unlock</span>
                  <span className="text-blue-500 font-bold mb-3">+100</span>
                  <div className="flex items-center justify-center bg-blue-500 h-8 w-8 rounded-full shadow-md"></div>
                  <span className="text-md font-semibold text-black p-4 bg-blue-300 rounded-b-[100px]">
                    ⚡flash
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-black text-white rounded-lg relative mb-6">
                <div className="absolute left-[17%] lg:left-[25%] top-[-20px] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-black"></div>

                <h4 className="text-lg font-bold mb-2">
                  YOU WON 100 COINS! 🎉
                </h4>
                <p className="text-sm">
                  Redeem the coins before making the final payment for the next
                  order. 10 coins = ₹1
                </p>
              </div>

              <button
                onClick={handleShowModal}
                className="text-blue-500 text-lg lg:text-md mt-4 cursor-pointer px-2 py-[2px] bg-white font-semibold w-full text-center"
              >
                HOW TO REDEEM COINS?
              </button>

              <ModalPopup
                isModalVisible={isModalVisible}
                handleCancel={handleCancel}
              />
            </div>
          ) : hairRasDaily &&
            guttShuddhiMorning &&
            guttShuddhiEvening &&
            hairRasWeekly1 &&
            hairRasWeekly2 &&
            hairRasWeekly3 ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-80 z-10">
              <div className="flex justify-center items-center flex-col gap-2">
                <Lottie
                  animationData={celebrate}
                  loop={true}
                  className="w-32 h-32"
                />
                <p className="text-lg 2xl:text-2xl font-bold text-[#A1BD13] p-2">
                  Wohoo, You have earned a reward for your consistent efforts 💪🏼
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full w-full flex justify-start items-center p-2 flex-col">
              <div className="font-bold text-2xl">Your Selected Items:</div>
              <div className="flex justify-center items-center p-2 flex-col font-bold">
                {selectedItems?.map((item) => (
                  <div>{item}</div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-white p-4 rounded-lg mb-4 shadow-lg shadow-[#DAEBF1] border">
          <h3 className="text-xl font-bold mb-4">Daily Dosage</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-start justify-start pl-3">
              <p className="text-lg font-semibold mb-3">Hair Ras</p>
              <div className="relative flex justify-center items-center p-2 bg-[#DAEBF1] h-[60px] w-14 rounded-md shadow-md">
                <img
                  src="https://oextech.blr1.digitaloceanspaces.com/Website%5Boex%5D/brandLogo/injection.png"
                  alt="Hair Ras"
                  width={50}
                  height={50}
                  className="cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-md text-blue-400 mb-4">ONCE DAILY</p>
              <div
                className="flex items-center justify-between mb-3 border border-[#DAEBF1] rounded-md px-2 py-[2px] w-full relative group"
                style={{
                  backgroundColor: hairRasDaily ? "#F3F7DE" : "transparent",
                  borderColor: hairRasDaily ? "#A1BD13" : "black",
                }}
              >
                <div className="absolute bg-black left-0 bottom-full mb-2 text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer w-[200px]">
                  <h4 className="text-sm text-blue-400 mb-2">WIN 100 COINS</h4>
                  <p className="text-white text-sm">
                    Did you take your morning supplement? Check the box if yes.
                  </p>
                </div>

                <p className="mr-2">1 Tablet (Morning)</p>
                <input
                  type="checkbox"
                  className="ml-auto cursor-pointer"
                  style={{
                    accentColor: hairRasDaily ? "#A1BD13" : "initial",
                    width: "15px",
                    height: "15px",
                  }}
                  checked={hairRasDaily}
                  onChange={() => handleHairRasDailyCheckBox()}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-start justify-start pl-3">
              <p className="text-lg font-semibold mb-3 text-center">
                Gutt Shuddhi
              </p>
              <div className="relative flex justify-between items-start p-2 bg-[#DAEBF1] h-[60px] w-14 rounded-md shadow-md">
                <img
                  src="https://oextech.blr1.digitaloceanspaces.com/Website%5Boex%5D/brandLogo/syrup.png"
                  alt="Hair Ras"
                  width={50}
                  height={50}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-md text-blue-400 mb-4">TWICE DAILY</p>
              <div
                className="flex items-center justify-between mb-3 border border-black rounded-md px-2 py-[2px] w-full relative group"
                style={{
                  backgroundColor: guttShuddhiMorning
                    ? "#F3F7DE"
                    : "transparent",
                  borderColor: guttShuddhiMorning ? "#A1BD13" : "black",
                }}
              >
                <div className="absolute bg-black left-0 bottom-full mb-2 text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer w-[200px]">
                  <h4 className="text-sm text-blue-400 mb-2">WIN 100 COINS</h4>
                  <p className="text-white text-sm">
                    Did you take your morning supplement? Check the box if yes.
                  </p>
                </div>

                <p className="mr-2">1 Tablet (Morning)</p>
                <input
                  type="checkbox"
                  className="ml-auto cursor-pointer"
                  style={{
                    accentColor: guttShuddhiMorning ? "#A1BD13" : "initial",
                    width: "15px",
                    height: "15px",
                  }}
                  checked={guttShuddhiMorning}
                  onChange={() => handleGuttShuddhiMorningCheckBox()}
                />
              </div>

              <div
                className="flex items-center justify-between border border-[1px] border-black rounded-md px-2 py-[2px] w-full relative group"
                style={{
                  backgroundColor: guttShuddhiEvening
                    ? "#F3F7DE"
                    : "transparent",
                  borderColor: guttShuddhiEvening ? "#A1BD13" : "black",
                }}
              >
                <div className="absolute bg-black left-0 bottom-full mb-2 text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer w-[200px]">
                  <h4 className="text-sm text-blue-400 mb-2">WIN 100 COINS</h4>
                  <p className="text-white text-sm">
                    Did you take your morning supplement? Check the box if yes.
                  </p>
                </div>

                <p className="mr-2">1 Tablet (Evening)</p>
                <input
                  type="checkbox"
                  className="ml-auto cursor-pointer"
                  style={{
                    accentColor: guttShuddhiEvening ? "#A1BD13" : "initial",
                    width: "15px",
                    height: "15px",
                  }}
                  checked={guttShuddhiEvening}
                  onChange={() => handleGuttShuddhiEveningCheckBox()}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4 shadow-lg shadow-[#DAEBF1] border">
          <h3 className="text-xl font-bold mb-4">Weekly Dosage</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-center justify-center pl-3">
              <p className="text-lg font-semibold mb-1 text-center">Hair Ras</p>
              <div className="relative flex justify-center items-center p-2 bg-[#DAEBF1] h-[60px] w-14 rounded-md shadow-md">
                <img
                  src="https://oextech.blr1.digitaloceanspaces.com/Website%5Boex%5D/brandLogo/tablet.png"
                  alt="injection"
                  width={50}
                  height={50}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-md text-blue-400 mb-4">USE 3 TIMES A WEEK</p>

              <div
                className="flex items-center justify-between mb-2 border border-[1px] border-black rounded-md px-2 py-[2px] w-full relative group"
                style={{
                  backgroundColor: hairRasWeekly1 ? "#F3F7DE" : "transparent",
                  borderColor: hairRasWeekly1 ? "#A1BD13" : "black",
                }}
              >
                <div className="absolute bg-black left-0 bottom-full mb-2 text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer w-[200px]">
                  <h4 className="text-sm text-blue-400 mb-2">WIN 100 COINS</h4>
                  <p className="text-white text-sm">
                    Did you take your morning supplement? Check the box if yes.
                  </p>
                </div>

                <p className="mr-2">1 Tablet (1st time)</p>
                <input
                  type="checkbox"
                  className="ml-auto"
                  style={{
                    accentColor: hairRasWeekly1 ? "#A1BD13" : "initial",
                    width: "15px",
                    height: "15px",
                  }}
                  checked={hairRasWeekly1}
                  onChange={() => handleHairWeeklyOneCheckBox()}
                />
              </div>

              <div
                className="flex items-center justify-between mb-3 border border-[1px] border-black rounded-md px-2 py-[2px] w-full relative group"
                style={{
                  backgroundColor: hairRasWeekly2 ? "#F3F7DE" : "transparent",
                  borderColor: hairRasWeekly2 ? "#A1BD13" : "black",
                }}
              >
                <div className="absolute bg-black left-0 bottom-full mb-2 text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer w-[200px]">
                  <h4 className="text-sm text-blue-400 mb-2">WIN 100 COINS</h4>
                  <p className="text-white text-sm">
                    Did you take your morning supplement? Check the box if yes.
                  </p>
                </div>

                <p className="mr-2">1 Tablet (2nd time)</p>
                <input
                  type="checkbox"
                  className="ml-auto"
                  style={{
                    accentColor: hairRasWeekly2 ? "#A1BD13" : "initial",
                    width: "15px",
                    height: "15px",
                  }}
                  checked={hairRasWeekly2}
                  onChange={() => handleHairWeeklyTwoCheckBox()}
                />
              </div>

              <div
                className="flex items-center justify-between mb-3 border border-[1px] border-black rounded-md px-2 py-[2px] w-full relative group"
                style={{
                  backgroundColor: hairRasWeekly3 ? "#F3F7DE" : "transparent",
                  borderColor: hairRasWeekly3 ? "#A1BD13" : "black",
                }}
              >
                <div className="absolute bg-black left-0 bottom-full mb-2 text-white text-xs rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer w-[200px]">
                  <h4 className="text-sm text-blue-400 mb-2">WIN 100 COINS</h4>
                  <p className="text-white text-sm">
                    Did you take your morning supplement? Check the box if yes.
                  </p>
                </div>

                <p className="mr-2">1 Tablet (3rd time)</p>
                <input
                  type="checkbox"
                  className="ml-auto"
                  style={{
                    accentColor: hairRasWeekly3 ? "#A1BD13" : "initial",
                    width: "15px",
                    height: "15px",
                  }}
                  checked={hairRasWeekly3}
                  onChange={() => handleHairWeeklyThreeCheckBox()}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-white p-4 rounded-lg shadow-sm gap-4">
          <button
            className={`bg-[#A1BD13] hover:bg-[#b3db76] text-white font-bold py-2 px-4 rounded-full w-full mb-4 ${
              !isAnyChecked ? "opacity-0 cursor-not-allowed" : ""
            }`}
            disabled={!isAnyChecked}
            onClick={handleLogRoutineClick}
          >
            Log Routine
          </button>
          <button
            onClick={handleFaqClick}
            className="text-lg text-blue-500 cursor-pointer"
          >
            Read FAQs
          </button>
          <button
            onClick={handleTncClick}
            className="text-lg text-blue-500 cursor-pointer"
          >
            Terms & Conditions
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
