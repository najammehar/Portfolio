import React from "react";
import Heading from "./Heading";
import { IoLogoHtml5, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact, FaLaptopCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiAppwrite,
  SiSupabase,
  SiTypescript,
  SiGithub,
  SiNextdotjs,
  SiVercel,
} from "react-icons/si";

function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      icon: <FaLaptopCode className="w-6 h-6" />,
      skills: [
        { icon: <IoLogoHtml5 className="w-6 h-6" />, name: "HTML & CSS", bg: "hover:bg-[#e34f26]" },
        { icon: <IoLogoJavascript className="w-6 h-6" />, name: "JavaScript", bg: "hover:bg-[#f7df1e]" },
        { icon: <SiTypescript className="w-6 h-6" />, name: "TypeScript", bg: "hover:bg-[#3178c6]" },
        { icon: <FaReact className="w-6 h-6" />, name: "React", bg: "hover:bg-[#61dafb]" },
        { icon: <SiNextdotjs className="w-6 h-6" />, name: "Next.js", bg: "hover:bg-[#000000]" },
        { icon: <SiTailwindcss className="w-6 h-6" />, name: "Tailwind", bg: "hover:bg-[#38bdf8]" },
      ]
    },
    {
      category: "Backend",
      icon: <FaServer className="w-6 h-6" />,
      skills: [
        { icon: <IoLogoNodejs className="w-6 h-6" />, name: "Node JS", bg: "hover:bg-[#339933]" },
        { icon: <SiExpress className="w-6 h-6" />, name: "Express", bg: "hover:bg-[#000000]" },
        { icon: <SiAppwrite className="w-6 h-6" />, name: "Appwrite", bg: "hover:bg-[#f02e65]" },
        { icon: <SiSupabase className="w-6 h-6" />, name: "Supabase", bg: "hover:bg-[#3ecf8e]" },
      ]
    },
    {
      category: "Database",
      icon: <FaDatabase className="w-6 h-6" />,
      skills: [
        { icon: <SiPostgresql className="w-6 h-6" />, name: "PostgreSQL", bg: "hover:bg-[#336791]" },
        { icon: <SiMongodb className="w-6 h-6" />, name: "MongoDB", bg: "hover:bg-[#47a248]" },
      ]
    },
    {
      category: "Tools",
      icon: <FaTools className="w-6 h-6" />,
      skills: [
        { icon: <SiGithub className="w-6 h-6" />, name: "GitHub", bg: "hover:bg-[#181717]" },
        { icon: <SiVercel className="w-6 h-6" />, name: "Vercel", bg: "hover:bg-[#000000]" },
      ]
    }
  ];

  return (
    <section className="text-gray-100">
      <div className="max-w-7xl px-4 mx-auto pt-8 pb-24">
        {/* Header */}
        <Heading
          bgText={"Skills"}
          text1={"My"}
          text2={"Skills"}
          bgColor={"text-grey-5"}
        />
        {/* Body */}
        <div className="grid gap-8 px-4 md:px-0">
          {skillsData.map((category, idx) => (
            <div key={idx} className="bg-[#333] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary-100">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold">{category.category}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`group ${skill.bg} rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="text-gray-100 group-hover:text-white transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-xs font-medium text-gray-100 group-hover:text-white text-center">
                      {skill.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;