import { useState } from "react";
import MicrophoneIcon from "./../assests/image/microphone.svg";
import VideoIcon from "./../assests/image/video.svg";
import Arrow from "./../assests/image/arrowCall.svg";
import Speeker from "./../assests/image/speeker.svg";
const Footer = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [voice, setVoice] = useState(false);
  return (
    <footer className="flex flex-wrap justify-center gap-6 lg:flex-row lg:justify-between items-center px-6 bg-white py-4">
      {/* footer left */}
      <div className="flex items-center gap-2 px-[0.7rem] py-[0.80rem] rounded-lg bg-[#F3F4F6] ">
        <img src={Speeker} />
        <input type="range" className="w-24" defaultValue={40}/>
      </div>
      {/* footer center */}
      <div className="flex space-x-5 container-btn-call-footer">
        <button
          onClick={() => setVoice(!voice)}
          className=""
        >
          <img src={MicrophoneIcon} />
          <img src={Arrow} />
          {voice && (
            <div className="w-[0.2rem] h-8 rounded-lg rotate-45 absolute bg-[#F44653]"></div>
          )}
        </button>
        <button onClick={() => setShowVideo(!showVideo)}>
          <img src={VideoIcon} />
          <img src={Arrow} />
          {showVideo && (
            <div className="w-[0.2rem] transition-all shadow-sm h-8 rounded-lg rotate-45 absolute bg-[#F44653]"></div>
          )}
        </button>
      </div>
      {/* footer right */}
      <button className="bg-[#F44653] text-xs rounded-md px-[0.7rem] py-[0.80rem] hover:bg-[#e2434e] shadow-sm font-medium text-white">
        Leave Meeting
      </button>
    </footer>
  );
};

export default Footer;
