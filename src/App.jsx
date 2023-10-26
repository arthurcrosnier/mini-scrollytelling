import { gsap } from "gsap";
import React, { useState, useEffect } from "react";
import "./components/setup/gsapSetup";
import Introduction from "./components/Introduction";
import History from "./components/History";
import Model3d from "./components/Model3d";
import Conclusion from "./components/Conclusion";
//import ScrollComponent from "./components/ScrollComponent"; // for test

function App() {
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    if (!isModelLoaded) return;
    const panels = [".first", ".second", ".third", ".fourth"];
    panels.forEach((panel, index) => {
      gsap.to(panel, {
        scrollTrigger: {
          trigger: panel,
          scrub: true,
          pin: true,
          start: "top top",
          end: "+=300%",
        },
      });
    });
  }, [isModelLoaded]);

  return (
    <>
      {/* <ScrollComponent /> */}
      {!isModelLoaded ? (
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div id="one" className="description panel first">
            <Introduction />
          </div>
          <div id="two" className="description panel second">
            <History />
          </div>
        </>
      )}

      <div id="three" className="description panel third">
        <Model3d
          isModelLoaded={isModelLoaded}
          setIsModelLoaded={setIsModelLoaded}
        />
      </div>
      {!isModelLoaded ? (
        <div className="loading-screen"></div>
      ) : (
        <div id="four" className="description panel fourth">
          <Conclusion />
        </div>
      )}
    </>
  );
}

export default App;
