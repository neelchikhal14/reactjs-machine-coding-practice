import React from "react";

type ClockHandProps = {
  height: string;
  bgColor: string;
};
const ClockHand = ({ bgColor, height }: ClockHandProps) => {
  return (
    <div
      className={`minhand h-[5px] w-[5px] bg-green-600 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 after:absolute after:h-[${height}] after:w-[5px] after:${bgColor} after:bottom-0 after-hand`}
    ></div>
  );
};

export default ClockHand;
