import React from "react";
import profile from "../assets/profile.png";
import { AiOutlineDownload } from "react-icons/ai";
import Heading from "./Heading";
import resume from "../assets/resume.pdf";

function About() {
  return (
    <section className="text-gray-100 bg-[#242526]">
      <div className="max-w-7xl px-4 mx-auto py-8">
        {/* Header */}
        <Heading
          bgText={"About"}
          text1={"About"}
          text2={"Me"}
          bgColor={"text-[#fefefe0a]"}
        />

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 px-4 md:px-0">
          {/* Image */}
          <div className="col-span-1 md:col-span-2 relative p-2 sm:p-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg shadow-lg overflow-hidden max-w-96 mx-auto md:w-full md:mx-0">
            <div className=" md:h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-transparent to-gray-900 opacity-40"></div>
              <div className="relative z-10 h-full">
                <div className="border-4 border-white rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300 h-full">
                  <img
                    src={profile}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 lg:w-24 lg:h-24 bg-white opacity-30 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 lg:w-16 lg:h-16 bg-white opacity-30 rounded-full"></div>
            </div>
          </div>

          {/* Content */}
          <div className="col-span-1 md:col-span-4 flex flex-col justify-around lg:justify-normal gap-6 lg:gap-4 lg:py-4">
            <div>
              <h2 className="font-semibold text-xl lg:text-lg text-primary-100">
                Introduction
              </h2>
              <p className="text-sm lg:text-lg text-gray-400 mt-2">
                I am Najam ul Hassan, a MERN stack developer with 1 year of
                experience in building dynamic and user-friendly applications. I
                specialize in frontend development with React and have hands-on
                experience in backend technologies, including Node.js, Express,
                MongoDB, and Appwrite. Additionally, I have expertise in
                Next.js, Git/GitHub, and database management. Passionate about
                crafting efficient and scalable solutions, I continuously
                enhance my skills to stay at the forefront of web development.
              </p>
            </div>
            <div>
              <h2 className="font-semibold mb-3 text-xl lg:text-lg text-primary-100">
                Education
              </h2>
              <div className="relative flex gap-4">
                <div className="flex flex-col justify-center items-center">
                  <div className="absolute h-5 w-5 -top-1 bg-primary-100 rounded-full"></div>
                  <div className="w-1 h-full bg-gradient-to-b from-primary-100 to-transparent"></div>
                </div>
                <div>
                  <p className="text-sm lg:text-lg font-bold text-gray-100">
                    Bachelor Degree
                  </p>
                  <p className="text-sm lg:text-lg text-gray-400">2022-2026</p>
                  <p className="text-sm lg:text-lg text-gray-400">
                    COMSATS University Islamabad, Lahore Campus
                  </p>
                  <p className="text-sm lg:text-lg text-gray-400">
                    Software Engineering
                  </p>
                </div>
              </div>
            </div>
            <a
              href={resume}
              download="Najam ul Hassan Resume"
              className="w-fit border relative border-primary-100 text-gray-100 font-semibold pl-16 hover:pl-4 pr-4 hover:pr-16 py-3 duration-300 flex gap-2 items-center group rounded-full"
            >
              <div className="w-12 h-12 p-2 absolute left-0 group-hover:left-[68%] duration-300 bg-primary-100 rounded-full top-0">
                <AiOutlineDownload className="h-full w-full text-white" />
              </div>
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
