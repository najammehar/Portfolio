import React from "react";
import Heading from "./Heading";
import ProjectService from "../Appwrite/Project";
import { useEffect, useState } from "react";
import Project from "./Project";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [offset, setOffset] = useState(0);
  const [showSeeMore, setShowSeeMore] = useState(true);

  useEffect(() => {
    fetchProjects(4, 0);
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
        <button onClick={() => fetchProjects(4, offset)}>See More</button>
      )}
    </div>
    </section>
  );
}

export default Projects;
