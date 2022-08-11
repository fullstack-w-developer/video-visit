import React from "react";
interface props {
  title: string;
  key1: string;
  value1: string;
  key2: string;
  value2: string;
  key3: string;
  value3: string;
  key4: string;
  value4: string;
  flag?: any;
}
const CardInfoDevice = ({
  title,
  key1,
  value1,
  key2,
  value2,
  key3,
  value3,
  key4,
  value4,
  flag,
}: props) => {
  return (
    <>
      <div className="w-[85%] flex flex-col gap-2  mx-auto mt-20">
        <p className=" bg-[#BCBCBC]/20 rounded-md text-sm px-2 font-medium py-1 text-[#29A9E1]">
          {title}
        </p>
        <div className="item-modal">
          <span>{key1}:</span>
          <span>{value1}</span>
        </div>
        <div className="item-modal">
          <span>{key2}:</span>
          <span>{value2}</span>
        </div>
        <div className="item-modal">
          <span>{key3}:</span>
          <span>{value3}</span>
        </div>
        <div className="item-modal">
          <span className="flex-1">{key4}:</span>

          <span className="flex gap-2">
            {value4} {flag && <img className="mt-1" src={flag}/>}
          </span>
        </div>
      </div>
    </>
  );
};

export default CardInfoDevice;
