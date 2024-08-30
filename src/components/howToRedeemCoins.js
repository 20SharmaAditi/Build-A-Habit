import React, { useState } from "react";
import { Modal } from "antd";

function ModalPopup() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleGotIt = () => {
    setVisible(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={showModal}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-200"
      >
        Open Modal
      </button>
      <Modal
        title={
          <h2 className="text-lg font-semibold text-gray-900 text-center">
            How to Redeem Coins?
          </h2>
        }
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        className="rounded-lg p-0" // Removed extra padding to minimize modal size
        centered
      >
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <div className="space-y-3">
            {" "}
            {/* Reduced space between elements */}
            <p className="text-sm text-gray-600">
              {" "}
              {/* Smaller text for compactness */}
              You can redeem before making the final payment for your next
              order.
            </p>
            <div className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
              <span className="font-semibold text-sm text-gray-800">
                MAXIMUM DISCOUNT
              </span>
              <p className="text-sm text-gray-600">
                20% including the discount from coupons.
              </p>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
              <span className="font-semibold text-sm text-gray-800">
                COIN CONVERSION
              </span>
              <div className="flex flex-col text-sm text-gray-600">
                <p>10 coins = ₹1</p>
                <p>Coins cannot be exchanged for cash</p>
                <p>Redeem for discounts only</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
              <span className="font-semibold text-sm text-gray-800">
                COIN EXPIRY
              </span>
              <p className="text-sm text-gray-600">
                Coins will expire after 90 days from the date of credit.
              </p>
            </div>
          </div>
          <button
            onClick={handleGotIt}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200 w-full"
          >
            Got it
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalPopup;
