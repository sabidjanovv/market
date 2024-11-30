import React from "react";
import { BiBasket } from "react-icons/bi";

const Header = ({ logo, basket, handleBasketClick }) => {
  return (
    <div className="flex items-center justify-between p-6 mb-6 bg-[#c0fdff] border-[#023e7d] border-[1px]">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Sardor's Market Logo"
          className="w-12 h-12 object-contain mr-4"
        />
        <h1 className="text-4xl font-bold text-[#0466c8]">Sardor's Market</h1>
      </div>
      <div className="text-lg text-[#0466c8] font-semibold">
        <button
          onClick={handleBasketClick}
          className="relative flex items-center justify-center p-2 rounded-full bg-[#0466c8] hover:bg-[#0353a4] text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#023e7d]"
        >
          <BiBasket className="text-3xl md:text-4xl" />
          {basket.length > 0 && (
            <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-2.5 py-1 transform translate-x-1/2 -translate-y-1/2">
              {basket.length}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
