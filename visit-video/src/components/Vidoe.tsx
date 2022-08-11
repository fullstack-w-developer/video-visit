import { useContext } from "react";
import { fullScreenContext } from "../context/FullScreen";
import Image from "./../assests/image/i-brain.svg";
import BtnVideoControl from "./BtnVideoControl";

const Vidoe = ({ socket }: { socket: any }) => {
  const { fullScreen, setFullScreen } = useContext(
    fullScreenContext
  );
  return (
    <div className="flex-[3] lg:flex-[3.5] ">
      <img
        src={Image}
        className={`w-full h-full object-cover  ${
          fullScreen ? "fixed top-0 left-0 z-50" : ""
        }`}
      />
      <div
        className={`absolute bottom-0 z-50 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          fullScreen ? "block" : "hidden"
        }`}
      >
        <BtnVideoControl
          fullScreen={fullScreen}
          onClickScreen={() => setFullScreen(!fullScreen)}
          showDeviceBtn={false}
          socket={socket}
        />
      </div>
      {/* {fullScreen && (
       
      )} */}
    </div>
  );
};

export default Vidoe;
