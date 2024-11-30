import React from "react";

const Modal = ({ children, close }) => {
  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center">
      <div
        onClick={close}
        className="fixed inset-0 bg-black bg-opacity-50"
        aria-hidden="true"
      ></div>

      <div
        className="relative bg-white p-6 rounded-lg shadow-lg z-50 max-w-md w-full"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
