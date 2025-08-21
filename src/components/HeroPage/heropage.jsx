import React from "react";
import Emailpage from "../emailpage/page";
const logo = new URL("../../assets/logo.png", import.meta.url).href;
const hero = new URL("../../assets/hero-bg.jpg", import.meta.url).href;

function HeroPage() {
  return (
    <>
      <section
        className="relative flex flex-col h-[80vh] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/70 "></div>

        <div className="z-10">
          <div className="relative flex justify-between items-center mx-4 md:mx-14 lg:mx-32">
            <img
              src={logo}
              alt=""
              className="w-20 h-16 md:w-24 md:h-20 lg:w-40 lg:h-24"
            />
            <div>
              <button className="bg-[#e50914] w-fit h-8 px-4 text-center rounded-lg md:h-8 md:px-3 lg:h-10 lg:px-8 text-sm md:text-base">
                sign in
              </button>
            </div>
          </div>

          <div className="px-6 pb-4 ">
            <div className="my-20 md:my-32 lg:my-44 justify-center items-center flex flex-col text-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl w-full md:w-8/12 lg:w-2/5 font-black text-center leading-tight mb-4">
                Unlimited movies, TV shows, and more
              </h1>
              <p className="font-bold text-lg md:text-xl mb-8 text-white">
                Starts at ₦2,500. Cancel anytime.
              </p>
              <div>
                <Emailpage />
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 -bottom-[4rem] h-24">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 96"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="curveStroke"
                x1="0"
                y1="0"
                x2="1440"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#E50914" />
                <stop offset="1" stopColor="#ff4d6d" />
              </linearGradient>
              <filter
                id="softGlow"
                x="-20%"
                y="-200%"
                width="140%"
                height="400%"
              >
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
              </filter>
            </defs>

            <g opacity="0.85">
              <path
                d="M0,52 Q720,14 1440,52"
                stroke="url(#curveStroke)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
              <g filter="url(#softGlow)">
                <path
                  d="M0,52 Q720,14 1440,52"
                  stroke="url(#curveStroke)"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.45"
                />
              </g>
            </g>
          </svg>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
