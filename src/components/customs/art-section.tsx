"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ArtSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "bottom right",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <div id="art">
      <div className="container mx-auto h-screen pt-20">
        <h2 className="will-fade font-black text-4xl text-center">
          Abuja Aviation
          <br /> Excellence Awards
        </h2>

        <div className="content">
          <div className="cocktail-image w-2xl mx-auto mt-20">
            <Image
              src="/assets/stage.png"
              alt="cocktail"
              width={500}
              height={500}
              className="abs-center masked-img size-full object-contain"
            />
          </div>
          <div className="will-fade mt-10 text-center max-w-2xl mx-auto">
            <p className="">
              the main content of the page the main content of the page the main
              content of the page the main content of the page the main content
              of the page
            </p>
          </div>

          <div className="masked-container">
            <h2 className="will-fade"> Sip-worthy perfection</h2>
            <div className="" id="masked-content">
              <h3>made with craft, poured with passion</h3>
              <p>
                this isnt just any award, its the only award that soars through
                the skies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
