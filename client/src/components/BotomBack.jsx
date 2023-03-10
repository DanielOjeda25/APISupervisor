import React from "react";

function BackButton() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="fixed top-2 left-1 mb-2 ml-2 ">
      <button
        onClick={handleGoBack}
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-xs flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M11.707 4.293a1 1 0 00-1.414 0L4.586 10l5.707 5.707a1 1 0 101.414-1.414L7.414 10l4.293-4.293a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
        Regresar
      </button>
    </div>
  );
}

export default BackButton;
