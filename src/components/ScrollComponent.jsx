import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";

import "./setup/gsapSetup";
import PreviewIntroHegra from "../assets/images/preview_intro_hegra.png";
import HegraVideo from "../assets/videos/intro_hegra.mp4";

const ScrollComponent = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    // --- BLUE PANEL ---
    gsap.to(".blue", {
      scrollTrigger: {
        trigger: ".blue",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%",
      },
    });

    // --- RED PANEL ---
    gsap.to(".red", {
      scrollTrigger: {
        trigger: ".red",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%",
      },
    });

    // --- ORANGE PANEL ---
    gsap.to(".orange", {
      scrollTrigger: {
        trigger: ".orange",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%",
      },
    });
  }, []);

  const handlePlay = () => {
    videoRef.current.currentTime = 6;
  };
  return (
    <>
      <div id="one" className="description panel blue bg-blue-500">
        <video
          onPlay={handlePlay}
          className="h-auto w-full object-cover"
          controls
          autoPlay
          muted
          loop
          preload="metadata"
          poster={PreviewIntroHegra}
          ref={videoRef}
        >
          <source src={HegraVideo} type="video/mp4" />
          Votre navigateur ne prend pas en charge la vidéo.
        </video>
        <div className="absolute top-40 left-4">
          <h1 className="text-white text-6xl font-bold">Discover Hegra</h1>
          <h2 className="text-white text-2xl mt-2">
            A Journey into Ancient Arabia
          </h2>
          <p className="text-white mt-4">
            The <strong>Hegra Archaeological Site</strong> (al-Hijr / Madā ͐ in
            Ṣāliḥ) is the first World Heritage property to be inscribed in Saudi
            Arabia. [...]
            <a
              href="https://whc.unesco.org/en/list/1293/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>

      <section id="two" className="panel red bg-red-500">
        <p>
          This line's animation will begin when it enters the viewport and
          finish when its top edge hits the top of the viewport, staying
          perfectly in sync with the scrollbar because it has{" "}
          <code>scrub:&nbsp;true</code>
        </p>
      </section>

      <section id="three" className="panel orange bg-orange-500">
        <p>
          This orange panel gets pinned when its top edge hits the top of the
          viewport, then the line's animation is linked with the scroll position
          until it has traveled 100% of the viewport's height (
          <code>end: "+=100%"</code>), then the orange panel is unpinned and
          normal scrolling resumes. Padding is added automatically to push the
          rest of the content down so that it catches up with the scroll when it
          unpins. You can set <code>pinSpacing: false</code> to prevent that if
          you prefer.
        </p>
      </section>
    </>
  );
};

export default ScrollComponent;
