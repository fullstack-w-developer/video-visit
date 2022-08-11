import React, { useContext, useState } from "react";
import { fullScreenContext } from "../context/FullScreen";
import {
  handleDown,
  handleLeft,
  handleRight,
  handleUp,
} from "../utils/FunVideoController";
import Captrue from "./../assests/image/captrue.svg";
import BtnVideoControl from "./BtnVideoControl";

const VideoController = ({ socket }: { socket: any }) => {
  const { fullScreen, setFullScreen } = useContext(
    fullScreenContext
  );

  const arrow = (
    <svg
      className="w-4 h-4 lg:w-7 lg:h-7"
      viewBox="0 0 26 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.5647 11.048L18.8436 5.32703L15.3504 1.81599C13.8712 0.336726 11.4651 0.336726 9.98586 1.81599L0.753809 11.048C-0.458121 12.26 0.415181 14.3274 2.10832 14.3274H12.1067H23.2102C24.9211 14.3274 25.7766 12.26 24.5647 11.048Z"
        fill="#29A9E1"
        className="group-active:!fill-[#fff]"
      />
    </svg>
  );

  return (
    <div className="flex-1 mt-6 lg:mt-0  bg-[#bcbcbc1a]/[0.1] w-full h-full flex flex-row-reverse items-center py-[0.4rem] rounded-[8px] border-2 border-white lg:flex-col justify-around">
      {/* controll left or roght and top bottom vidoe */}
      <ul className="circle relative flex justify-center items-center">
        <button
          className={`flex justify-center text-[14px] font-medium z-[2]   flex-col items-center text-xs border-[5px] border-white rounded-full w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] bg-[#334155]`}
        >
          <img
            className="w-6 h-6 lg:w-7 lg:h-7"
            src={Captrue}
          />

          <span className="text-white hidden lg:block">
            captrue
          </span>
        </button>
        <li
          onClick={() => handleUp(socket)}
          className="group group-icon1"
        >
          <div
            className={`icon-arrow  group-active:bg-[#334155]`}
          >
            {arrow}
          </div>
        </li>
        <li
          onClick={() => handleLeft(socket)}
          className=" group group-icon2"
        >
          <div
            className={`icon-arrow  group-active:bg-[#334155]`}
          >
            {arrow}
          </div>
        </li>
        <li
          onClick={() => handleDown(socket)}
          className=" group group-icon3"
        >
          <div
            className={`icon-arrow  group-active:bg-[#334155]`}
          >
            {arrow}
          </div>
        </li>
        <li
          onClick={() => handleRight(socket)}
          className=" group group-icon4"
        >
          <div
            className={`icon-arrow  group-active:bg-[#334155]`}
          >
            {arrow}
          </div>
        </li>
      </ul>

      {/* zoom in and  zoom out  and full screen && button show devices*/}

      <BtnVideoControl
        onClickScreen={() => setFullScreen(!fullScreen)}
        fullScreen={fullScreen}
        socket={socket}
      />
    </div>
  );
};

export default VideoController;
