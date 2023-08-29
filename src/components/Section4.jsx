import React from "react";
import BlackRec from "./BlackRec";
import "../styles/Section4.css";

const t1 = [
  "I can’t recommend this podcast enough",
  "Jacob is the best in the business",
  "A wealth of audio \n knowledge",
  "Every episode is a gem!",
  "Whoa whoa, let me take some notes!",
  "I’ve upped my game considerably since I started listening",
];
const t2 = [
  "Betty Lacey",
  "Adam Driver",
  "Marcus Brown",
  "Jessica Knowl",
  "Scott Adams",
  "Steven Blast",
];

const Section4 = () => {
  return (
    <section className="Section4">
      <div className="BlackR">
        <BlackRec text1={t1[0]} text2={t2[0]} />
        <BlackRec  text1={t1[3]} text2={t2[3]} />
      </div>
      <div className="BlackR">
        <BlackRec text1={t1[1]} text2={t2[1]} />
        <BlackRec  text1={t1[4]} text2={t2[4]} />
      </div>
      <div className="BlackR">
        <BlackRec text1={t1[2]} text2={t2[2]} />
        <BlackRec  text1={t1[5]} text2={t2[5]} />
      </div>
    </section>
  );
};

export default Section4;
