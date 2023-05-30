import React, { useState } from "react";

const LucesTrafico = () => {
  const [color, setColor] = useState("red");

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="p-5">
          <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`mt-3 ml-3 light red ${color === "red" ? "active" : ""}`} onClick={() => handleClick("red")}></div>
                </div>
            </div>
            <div className="row">
            <div className="col-12">
                <div className={`mt-3 ml-3 light yellow ${color === "yellow" ? "active" : ""}`}onClick={() => handleClick("yellow")}></div>
            </div>
            </div>
            <div className="row">
            <div className="col-12">
                <div className={`mt-3 ml-3 light green ${color === "green" ? "active" : ""}`}onClick={() => handleClick("green")}></div>
            </div>
            </div>
            <div className="row">
            <div className="col-12">
                <div className={`mt-3 ml-3 light purple ${color === "purple" ? "active" : ""}`}onClick={() => handleClick("purple")}></div>
            </div>
            </div>
          </div>
    </div>
    );
};

export default LucesTrafico;
