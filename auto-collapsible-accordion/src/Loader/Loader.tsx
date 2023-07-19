import "./Loader.css";

import React from "react";

type Props = {
  width: number;
};

const Loader = ({ width }: Props) => {
  return (
    <div className="loader-container">
      <div
        className="loader"
        style={{
          width: `${width}%`,
          transition: "width 1s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default Loader;
