import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import HegraVideo from "../assets/videos/intro_hegra.mp4";
import PreviewIntroHegra from "../assets/images/preview_intro_hegra.png";

const Introduction = () => {
  const videoRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "+=300%",
        scrub: true,
      },
    });
    const texts = [h1Ref.current, h2Ref.current, pRef.current];
    texts.forEach((text, index) => {
      tl.fromTo(
        text,
        {
          autoAlpha: 0,
          y: 50,
          scale: 0.5,
          textShadow: "0px 0px 0px rgba(0, 0, 0, 0.8)",
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          textShadow: "5px 5px 10px rgba(0, 0, 0, 0.4)",
          duration: 2,
          ease: "power2.out",
        },
        `+=${index * 1}`
      )
        .to(text, { duration: 4 })
        .to(text, {
          autoAlpha: 0,
          y: -50,
          duration: 2,
          ease: "power2.in",
        });
    });
  }, []);

  return (
    <div className="flex flex-col w-full h-full relative">
      <video
        ref={videoRef}
        className="h-full w-full object-cover inset-0 z-0"
        muted="muted"
        loop
        autoPlay
        preload="metadata"
        poster={PreviewIntroHegra}
        onLoadedData={() => {
          videoRef.current.currentTime = 27;
        }}
      >
        <source src={HegraVideo} type="video/mp4" />
        Votre navigateur ne prend pas en charge la vidéo.
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
        <h1
          className="absolute text-white text-9xl font-extrabold tracking-wide shadow-lg mb-4"
          ref={h1Ref}
        >
          Discover Hegra
        </h1>
        <h2
          className="absolute text-white text-7xl font-semibold shadow-md"
          ref={h2Ref}
        >
          A Journey into Ancient Arabia
        </h2>
        <p className="absolute text-white text-4xl leading-relaxed" ref={pRef}>
          The <strong>Hegra Archaeological Site</strong> is the first World
          Heritage property to be inscribed in Saudi Arabia.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
