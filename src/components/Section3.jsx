import React from "react";
import Sec3 from "../assets/Sec3.jpg";
import "../styles/Section3.css";

const Section3 = () => {
  return (
    <section>
      <div className="Section3">
        <div className="Sec3_left">
          <p className="Episode_title">Meet your host</p>
          <p className="BlackRect_Main">Jacob Paulaner</p>
          <p className="BlackRect_Secondy">
            Jacob has a background in audio engineering, <br />
            and has been podcasting since the early days.
          </p>
          <p className="BlackRect_Secondy">
            He’s here to help you level up your game <br />
            by sharing everything he’s learned along the way.
          </p>
        </div>
        <div className="Sec3_right">
          <img src={Sec3} />
        </div>
      </div>
    </section>
  );
};

export default Section3;
