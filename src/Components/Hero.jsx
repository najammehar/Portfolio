import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

function Hero({ contactRef }) {
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative overflow-hidden h-screen -mt-16 pt-16 flex items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-center md:justify-between max-w-7xl mx-auto px-4 w-full">
          <div className="text-gray-100 space-y-2 text-center md:text-left md:max-w-md lg:max-w-2xl">
            <p className="text-gray-400">Hi There! I'm</p>
            <h1 className="font-bold text-primary-100 text-3xl lg:text-5xl">
              Najam Ul Hassan
            </h1>
            <h1 className="font-semibold text-2xl lg:text-3xl">
              Web developer | Software Engineer
            </h1>
            <p className="text-gray-400">
              Turning complexity into clarity, I design intuitive user
              interfaces and engaging web applications.
            </p>
            <button
              onClick={scrollToContact}
              className="w-fit mx-auto border relative border-primary-100 text-gray-100 font-semibold pl-16 hover:pl-4 pr-4 hover:pr-16 py-3 duration-300 group rounded-full "
            >
              <div className="w-12 h-12 p-2 absolute left-0 group-hover:left-[72%] duration-300 bg-primary-100 rounded-full top-0">
                <AiOutlineArrowRight className="h-full w-full text-white" />
              </div>
              LET'S TALK
            </button>
          </div>
          <div className="relative">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 559.69 542.99"
              className="sm:max-w-96 max-w-72 w-full animate-blob"
            >
              <path
                d="m-7.2,216.98h614.05c19.06,0,34.53,15.47,34.53,34.53h0c0,41.11-33.38,74.49-74.49,74.49H-47.16c-19.06,0-34.53-15.47-34.53-34.53h0c0-41.11,33.38-74.49,74.49-74.49Z"
                transform="translate(273.94 -118.36) rotate(45)"
                style={{ fill: "#00df9a" }}
              />
              <path
                d="m551.34,79.02c0,43.64-35.38,151.78-79.02,151.78s-79.02-108.14-79.02-151.78S428.67,0,472.32,0s79.02,35.38,79.02,79.02Z"
                style={{ fill: "#00df9a" }}
              />
              <path
                d="m8.35,463.97c0-43.64,35.38-151.78,79.02-151.78s79.02,108.14,79.02,151.78-35.38,79.02-79.02,79.02S8.35,507.61,8.35,463.97Z"
                style={{ fill: "#00df9a" }}
              />
            </svg>
          </div>
        </div>
        <div className="absolute h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72 -right-24 -top-24 border-[16px] border-primary-100 rounded-full animate-ping -z-50"></div>
        <div className="absolute h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72  -left-24 -bottom-24 border-[16px] border-primary-100 rounded-full animate-ping -z-50"></div>
      </section>
    </>
  );
}

export default Hero;
