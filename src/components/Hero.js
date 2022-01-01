import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="hero"  >
       <img className="blob" src="images/blob.svg" alt=""/>
      <div className="heroTop" >
        <h3>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("MCA Coding club")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Welcomes you")
                .deleteAll()
                .typeString("MCA Coding club")
                .start();
            }}
          />
        </h3>
        <p>
          A hub for MCA coders in KEC.Here you can find about all our activities
        </p>
      </div>
      <div className="heroBottom">
        <button>sign up</button>
      </div>
    </div>
  );
}

export default Hero;
