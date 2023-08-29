import React from "react";
import "../styles/BlackRec.css";

const BlackRectangle = (props) => {
  return (
    <div className="BlackRec">
      <div>star star</div>
      <p className="MainText">{props.text1}</p>
      <p style={{color:"grey"}}>{props.text2}</p>
    </div>
  );
};

export default BlackRectangle;
