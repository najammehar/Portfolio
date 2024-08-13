import React from "react";
import Heading from "./Heading";
import ProjectService from "../Appwrite/Project";
import { useEffect, useState } from "react";
import Project from "./Project";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [offset, setOffset] = useState(0);
  const [showSeeMore, setShowSeeMore] = useState(true);

  useEffect(() => {
    fetchProjects(2, 0);
  }, []);

  async function fetchProjects(limit, offset) {
    try {
      const newProjects = await ProjectService.getProjects(limit, offset);

      // Check if there are any duplicate projects
      const uniqueProjects = newProjects.filter(
        (newProject) => !projects.some((project) => project.$id === newProject.$id)
      );

      // Update the projects state and offset
      setProjects([...projects, ...uniqueProjects]);
      setOffset(offset + limit);

      // Update the showSeeMore state
      setShowSeeMore(uniqueProjects.length === limit);
    } catch (error) {
      console.log('Appwrite service :: getProjects :: error', error);
      throw error;
    }
  }

  return (
    <section className="text-gray-100 bg-[#242526]">
      <div className="max-w-7xl px-4 mx-auto py-8">
        {/* Header */}
        <Heading
          bgText={"Works"}
          text1={"My"}
          text2={"Projects"}
          bgColor={"text-[#fefefe0a]"}
        />
      
        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-12 grid-cols-1">
          {projects.map((project) => (
            <Project key={project.$id} Project={project} />
          ))}
        </div>
      {showSeeMore && (
      <button
              onClick={() => fetchProjects(2, offset)}
              className="w-fit mx-auto block border relative border-primary-100 text-gray-100 font-semibold pl-10 hover:pl-4 pr-4 hover:pr-10 py-1 duration-300 group rounded-full mt-8 "
            >
              <div className="w-8 h-8 p-2 absolute left-0 group-hover:left-[80%] duration-300 bg-primary-100 rounded-full top-0">
                <FaChevronDown className="h-full w-full text-white" />
              </div>
              VIEW MORE
            </button>
      )}
    </div>
    </section>
  );
}

export default Projects;
