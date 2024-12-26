"use client";

import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted or denied the cookie
    const cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)cookieAccepted\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (cookieValue === "true" || cookieValue === "false") {
      return;
    }

    // Show the message if the user has not yet accepted or denied the cookie
    setShowMessage(true);
  }, []);

  const handleAccept = () => {
    // Set a cookie with the value "true" to indicate that the user has accepted the cookie
    document.cookie = "cookieAccepted=true;max-age=31536000";
    setShowMessage(false);
  };

  const handleDeny = () => {
    // Set a cookie with the value "false" to indicate that the user has denied the cookie
    document.cookie = "cookieAccepted=false;max-age=31536000";
    setShowMessage(false);
  };

  const handleDismiss = () => {
    // Hide the message without setting a cookie
    setShowMessage(false);
  };

  if (!showMessage) {
    return null;
  }

  return (
    <div className="cookie-consent">
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 bg-opacity-90 p-4 z-50">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-white font-bold text-lg mb-2 sm:mb-0">
            <a>
              This website uses cookies to improve your experience. Click
              "Accept" to continue or "Deny" to opt-out.
            </a>
            .
          </div>
          <div className="flex mt-4 sm:mt-0">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={handleAccept}
            >
              Accept
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={handleDeny}
            >
              Deny
            </button>
            <button
              className="text-gray-500 hover:text-gray-700 font-bold"
              onClick={handleDismiss}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
