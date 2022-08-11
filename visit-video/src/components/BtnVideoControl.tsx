import React, { useContext } from "react";
import ZoomIn from "./../assests/image/zoomIn.svg";
import ZoomOut from "./../assests/image/zoomOut.svg";
import FullScreenImage from "./../assests/image/fullscreen.svg";
import ExitFullScreenImage from "./../assests/image/exitFullScreen.svg";
import ResultIocn from "./../assests/image/resultIcon.svg";
import { modalContext } from "../context/ModalState";
import { handleZoomIn, handleZoomOut } from "../utils/FunVideoController";

interface props {
  fullScreen?: boolean;
  onClickScreen?: () => void;
  showDeviceBtn?: boolean;
  socket:any
}

const BtnVideoControl = ({
  fullScreen,
  onClickScreen,
  showDeviceBtn = true,
  socket
}: props) => {
  const { isOpen, setIsOpen } = useContext(modalContext);
  return (
    <div className="flex flex-col justify-center items-center gap-5 lg:w-52 lg:-mt-20">
      <div className="flex gap-3  justify-between items-center w-full container-btn-control">
        <button onClick={()=> handleZoomIn(socket)}>
          <img src={ZoomIn} />
        </button>
        <button onClick={()=> handleZoomOut(socket)}>
          <img src={ZoomOut} />
        </button>
        <button onClick={onClickScreen}>
          <img
            src={`${
              fullScreen
                ? ExitFullScreenImage
                : FullScreenImage
            }`}
          />
        </button>
      </div>
      {showDeviceBtn && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-medium text-[13px] lg:text-sm flex justify-center items-center gap-2 px-2 lg:px-0 lg:w-full py-3 rounded-lg bg-white border border-[#bcbcbc]/40"
        >
          <span>View The Results</span>
          <img src={ResultIocn} />
        </button>
      )}
    </div>
  );
};

export default BtnVideoControl;
