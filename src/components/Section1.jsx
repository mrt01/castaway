import React from "react";
import firstPhoto from "../assets/maninheadphones.jpg";
import "../styles/Section1.css";

const Section1 = () => {
  return (
    <section className="Section1">
      <div className="LeftSide">
        <img src={firstPhoto} />
      </div>
      <div className="RightSide">
        <h2>Take your podcast to the</h2>
        <h2>
          next <b> level</b>{" "}
        </h2>
      </div>
    </section>
  );
};

export default Section1;
