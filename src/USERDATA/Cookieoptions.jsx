


import React, { useState } from "react";
import { FaCookieBite } from "react-icons/fa";

const COOKIE_OPTIONS = [
  "Functionality",
  "Analytics Storage",
  "Ad Storage",
  "Ad User Data",
  "Ad Personalization",
  "Personalization Storage",
  "Security Storage",
];

const Cookieoptions = () => {
  const [checked, setChecked] = useState(
    COOKIE_OPTIONS.reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );
  const [showNotificationBar, setShowNotificationBar] = useState(true);
  const [showManageModal, setShowManageModal] = useState(false);

  const handleAcceptAll = () => {
    setChecked(
      COOKIE_OPTIONS.reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
    setShowNotificationBar(false);
    console.log("All cookies accepted");
  };

  const handleRejectAll = () => {
    setChecked(
      COOKIE_OPTIONS.reduce((acc, key) => ({ ...acc, [key]: false }), {})
    );
    setShowNotificationBar(false);
    console.log("All cookies rejected");
  };

  const handleDone = () => {
    setShowManageModal(false);
    setShowNotificationBar(false);
    console.log("Saved settings:", checked);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6">
      {/* Notification Popup */}
      {showNotificationBar && !showManageModal && (
        <div className="fixed bottom-0 left-0 right-0 sm:bottom-auto sm:top-6 sm:right-6 sm:left-auto bg-white border border-gray-200 rounded-t-2xl sm:rounded-2xl p-4 sm:p-6 shadow-xl w-full sm:w-[350px] md:w-[400px] flex flex-col gap-4 sm:gap-6 z-50">
          <div className="flex items-start gap-3 sm:gap-4">
            <FaCookieBite className="text-3xl sm:text-4xl text-yellow-500 mt-1" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-1">We use Cookies</h2>
              <p className="text-gray-600 text-sm sm:text-lg">
                We use cookies to enhance your experience. Read our{" "}
                <a href="/privacy-policy" className="underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3">
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 sm:px-5 sm:py-2 border border-black rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 flex-1 sm:flex-none"
            >
              Reject All
            </button>
            <button
              onClick={() => setShowManageModal(true)}
              className="px-4 py-2 sm:px-5 sm:py-2 border border-black rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 flex-1 sm:flex-none"
            >
              Manage
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 sm:px-5 sm:py-2 bg-black text-black rounded-full text-sm sm:text-base font-semibold hover:bg-gray-800 flex-1 sm:flex-none"
            >
              Accept All
            </button>
          </div>
        </div>
      )}

      {/* Manage Model */}
      {showManageModal && (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl max-w-full sm:max-w-lg w-full relative mx-2 sm:mx-0">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <FaCookieBite className="text-5xl sm:text-6xl text-yellow-500" />
              <h2 className="text-2xl sm:text-3xl font-bold">Cookie Settings</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center">
                We use cookies to provide you with the best possible experience.
                They also allow us to analyze user behavior to constantly
                improve.
              </p>
              <a href="/privacy-policy" className="text-blue-600 underline text-sm sm:text-base">
                See our Privacy Policy.
              </a>
            </div>

            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {COOKIE_OPTIONS.map((option) => (
                <label key={option} className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg">
                  <input
                    type="checkbox"
                    checked={checked[option]}
                    onChange={() =>
                      setChecked((prev) => ({
                        ...prev,
                        [option]: !prev[option],
                      }))
                    }
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10">
              <button
                onClick={() => {
                  setShowManageModal(false);
                  setShowNotificationBar(true);
                }}
                className="px-6 py-1.5 sm:px-8 sm:py-2 border border-black rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleDone}
                className="px-6 py-1.5 sm:px-8 sm:py-2 bg-black text-black rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-800"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cookieoptions;