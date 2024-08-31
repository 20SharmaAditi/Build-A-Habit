import React from "react";
import { Modal } from "antd";
import Lottie from "lottie-react";
import coin from "../animations/coin.json";

function ModalPopup({ isModalVisible, handleCancel }) {
  return (
    <Modal
      open={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      className="rounded-lg p-0 max-w-md"
      centered
    >
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-2">
          <Lottie
            animationData={coin}
            loop={true} // Loop animation if desired
            className="w-16 h-16"
          />
        </div>
        <h2 className="text-lg font-bold text-gray-900 text-center mb-2">
          How to Redeem Coins?
        </h2>
        <div className="space-y-3">
          <p className="text-sm text-gray-600 text-center">
            You can redeem coins before making the final payment for your next
            order.
          </p>
          <div className="flex justify-between items-start bg-gray-100 p-3 rounded-lg">
            <span className="font-semibold text-sm text-gray-800">
              MAXIMUM DISCOUNT
            </span>
            <p className="text-sm text-gray-600 ml-4 flex-1 text-right">
              20% including the discount from coupons.
            </p>
          </div>
          <div className="flex justify-between items-start bg-gray-100 p-3 rounded-lg">
            <span className="font-semibold text-sm text-gray-800">
              COIN CONVERSION
            </span>
            <div className="text-sm text-gray-600 text-right flex-1 ml-8">
              <p>10 coins = ₹1</p>
              <p>Coins cannot be exchanged for cash</p>
              <p>Redeem for discounts only</p>
            </div>
          </div>
          <div className="flex justify-between items-start bg-gray-100 p-3 rounded-lg">
            <span className="font-semibold text-sm text-gray-800">
              COIN EXPIRY
            </span>
            <p className="text-sm text-gray-600 ml-8 flex-1 text-right">
              Coins will expire after 90 days from the date of credit.
            </p>
          </div>
        </div>
        <button
          onClick={handleCancel}
          className="mt-4 bg-[#A1BD13] text-white px-4 py-2 rounded-lg shadow hover:bg-[#8AA211] transition duration-200 w-full"
        >
          Got it
        </button>
      </div>
    </Modal>
  );
}

export default ModalPopup;
