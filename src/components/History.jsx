import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";

import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import swiperImg1 from "../assets/images/swiper1.jpeg";
import swiperImg2 from "../assets/images/swiper2.jpeg";
import swiperImg3 from "../assets/images/swiper3.jpeg";
import swiperImg4 from "../assets/images/swiper4.jpeg";
import swiperImg5 from "../assets/images/swiper5.jpeg";
import swiperImg6 from "../assets/images/swiper6.jpeg";

function History() {
  const images = [
    swiperImg1,
    swiperImg2,
    swiperImg3,
    swiperImg4,
    swiperImg5,
    swiperImg6,
  ];

  const textParagraphs = [
    "The archaeological site of Al-Hijr is a major site of the Nabataean civilisation, in the south of its zone of influence.",
    "It bears witness to the encounter between a variety of decorative and architectural influences (Assyrian, Egyptian, Phoenician, Hellenistic), and the epigraphic presence of several ancient languages (Lihyanite, Thamudic, Nabataean, Greek, Latin).",
    "It bears witness to the development of Nabataean agricultural techniques using a large number of artificial wells in rocky ground. The wells are still in use.",
    "The ancient city of Hegra/Al-Hijr bears witness to the international caravan trade during late Antiquity.",
  ];

  const textRefs = textParagraphs.map(() => useRef(null));

  const englobeDivRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: englobeDivRef.current,
        start: "top+=300% top",
        end: "+=300%",
        scrub: true,
        // markers: true,
      },
    });

    textRefs.forEach((textRef) => {
      gsap.utils.toArray(textRef.current.children).forEach((word, index) => {
        tl.to(
          word,
          {
            opacity: 1,
            delay: index * 0.1,
            ease: "power2.out",
          },
          "-=0.09"
        );
      });
    });
  }, [textRefs]);

  return (
    <div ref={englobeDivRef} className="flex flex-col w-full h-full relative">
      <Swiper
        modules={[EffectFade, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        className="h-full w-full z-0"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative">
            <img src={img} alt={`Slide ${index}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center max-w-4/5 leading-7 font-bold z-10">
        <div id="p2" className="text-2xl textShadow">
          {textParagraphs.map((paragraph, index) => (
            <div key={index} ref={textRefs[index]}>
              {paragraph.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="word textShadow">
                  {word}&nbsp;
                </span>
              ))}
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
