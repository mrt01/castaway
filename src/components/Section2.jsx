import React from "react";
import "../styles/Section2.css";
import br1 from "../assets/BlackRec1.jpg";
import br2 from "../assets/BlackRec2.jpg";
import br3 from "../assets/BlackRec3.jpg";

const Section2 = () => {
  return (
    <section>
      <div className="Sec2Upper">
        <h2>Latest episodes</h2>
        <button>View all episodes</button>
      </div>
      <div className="BlackRectangle">
        <div className="BR_left">
          <img src={br1} />
        </div>
        <div className="BR_right">
          <p className="GreyArea">Gear</p>
          <p className="Episode_title">Episode 3</p>
          <p className="BlackRect_Main">
            Should you get <br />
            outboard audio gear?
          </p>
          <p className="BlackRect_Secondy">
            Is hardware really worth it when it comes to podcasting? The
            answeris...it depends. <br />
            Here’s our reasons on why you might want to consider picking
            something up.
          </p>
          <button>View Episode Details</button>
        </div>
      </div>
      <div className="BlackRectangle">
        <div className="BR_left">
          <img src={br2} />
        </div>
        <div className="BR_right">
          <p className="GreyArea">Tips & Tricks</p>
          <p className="Episode_title">Episode 2</p>
          <p className="BlackRect_Main">
            Mic tricks to take you <br />
            to the next level
          </p>
          <p className="BlackRect_Secondy">
            Stop rolling with those default settings on your mic. These small
            tweaks <br /> will take you from sounding good to great.
          </p>
          <button>View Episode Details</button>
        </div>
      </div>
      <div className="BlackRectangle">
        <div className="BR_left">
          <img src={br3} />
        </div>
        <div className="BR_right">
          <p className="GreyArea">Gear</p>
          <p className="Episode_title">Episode 1</p>
          <p className="BlackRect_Main">
            The best microphone <br /> under $200
          </p>
          <p className="BlackRect_Secondy">
            With so many microphones on the market, how are you supposed to know
            <br />
            what’s the best? Take a look at our top picks.
          </p>
          <button>View Episode Details</button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
