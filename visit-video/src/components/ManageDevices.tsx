import React, { useContext } from "react";
import Modal from "react-modal";
import { modalContext } from "../context/ModalState";
import Close from "./../assests/image/close.svg";
import Copy from "./../assests/image/copy.svg";
import Rebomed from "./../assests/image/robomed.svg";
import CardInfoDevice from "./CardInfoDevice";
import { infoDevices } from "./data";
const ManageDevices = () => {
  const { isOpen, setIsOpen } = useContext(modalContext);
  return (
    <Modal
      className="Modal z-50"
      overlayClassName="Overlay z-50"
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(!isOpen)}
    >
      <div className="">
        {/* close btn && print */}
        <div className="flex mt-10 gap-3 px-4 absolute flex-row-reverse right-2 lg:right-10">
          <img
            onClick={() => setIsOpen(!isOpen)}
            src={Close}
            className="cursor-pointer"
          />
          <img src={Copy} className="cursor-pointer" />
        </div>
        {/* image && info */}
        <div className="flex text-[#334155] justify-center flex-col items-center pt-10">
          <img src={Rebomed} />
          <p className="text-3xl  font-extrabold">
            Rebomed
          </p>
          <p className="pt-2 font-medium">
            February 17, 2009 - 08:00 PM{" "}
          </p>
        </div>

        {/* Health facilty */}
        {infoDevices.map((info, index) => {
          return (
            <CardInfoDevice
              key={index}
              title={info.title}
              flag={info.flag}
              key1={info.key1}
              value1={info.value1}
              key2={info.key2}
              value2={info.value2}
              key3={info.key3}
              value3={info.value3}
              value4={info.value4}
              key4={info.key4}
            />
          );
        })}

        {/*  */}
      </div>
    </Modal>
  );
};

export default ManageDevices;
