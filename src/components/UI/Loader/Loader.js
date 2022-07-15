import React from "react";
import './Loader.css'



const Loader = () => {
  return (
    <div className="box">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1 className="titleH1">Loading</h1>
    </div>
  );
};

export default Loader;
