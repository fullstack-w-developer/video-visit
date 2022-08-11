import React from "react";
import Online from "./../assests/image/online.svg";
function Header() {
  return (
    <header className="flex justify-between items-center bg-white py-4 shadow-md px-7">
      {/* header left */}
      <h2 className="font-medium lg:text-2xl text-[#334155]">
        Alice Warner
      </h2>

      {/* header right */}
      <div className="flex items-center gap-1 rounded-lg px-3 py-[0.6rem] bg-[#F3F4F6] text-[13px] font-medium border-2 border-[#BCBCBC]/25">
        <img
          className="w-4 h-4 lg:h-full lg:w-full"
          src={Online}
        />
        <p className="text-[#334155] ">13:03:34</p>
      </div>
    </header>
  );
}

export default Header;
