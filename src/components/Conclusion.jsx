import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import HegraImage from "../assets/images/hegra_final.jpeg";

function Conclusion() {
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col w-full h-full relative">
      <img
        src={HegraImage}
        alt="Hegra"
        ref={imgRef}
        className="h-full w-full object-cover inset-0 z-0"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
        <h1
          className="text-white text-7xl font-extrabold tracking-wide shadow-lg mb-4"
          ref={titleRef}
        >
          Hegra: Un trésor du passé
        </h1>
        <p className="text-white text-4xl leading-relaxed" ref={contentRef}>
          Hegra est un emblème de l'histoire ancienne, une fenêtre sur les
          civilisations passées qui ont façonné notre monde. Sa préservation et
          sa reconnaissance en tant que site du patrimoine mondial parlent de
          son importance non seulement pour l'Arabie saoudite, mais pour le
          monde entier. Nous vous invitons à découvrir davantage ou même à
          visiter ce lieu unique pour ressentir l'histoire qui y réside.
        </p>
      </div>
    </div>
  );
}

export default Conclusion;
