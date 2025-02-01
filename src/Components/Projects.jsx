import React from "react";
import Heading from "./Heading";
import ProjectService from "../Appwrite/Project";
import { useEffect, useState } from "react";
import Project from "./Project";
import { FaChevronDown } from "react-icons/fa";

function Projects() {
  const [pinnedProjects, setPinnedProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);
  const [offset, setOffset] = useState(0);
  const [showSeeMore, setShowSeeMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchInitialProjects();
  }, []);

  async function fetchInitialProjects() {
    try {
      setLoading(true);
      const [pinned, others] = await Promise.all([
        ProjectService.getPinnedProjects(),
        ProjectService.getOtherProjects(2, 0)
      ]);
      
      setPinnedProjects(pinned || []);
      setOtherProjects(others || []);
      setOffset(2);
      // Only show "See More" if we got exactly 2 other projects (indicating there might be more)
      setShowSeeMore(others && others.length === 2);
    } catch (error) {
      console.log('Error fetching projects:', error);
      setPinnedProjects([]);
      setOtherProjects([]);
    } finally {
      setLoading(false);
    }
  }

  async function fetchMoreProjects() {
    if (loading) return;
    
    try {
      setLoading(true);
      const newProjects = await ProjectService.getOtherProjects(4, offset);
      
      if (newProjects && newProjects.length > 0) {
        setOtherProjects(prev => [...prev, ...newProjects]);
        setOffset(prev => prev + 4);
        setShowSeeMore(newProjects.length === 4);
      } else {
        setShowSeeMore(false);
      }
    } catch (error) {
      console.log('Error fetching more projects:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="text-gray-100 bg-[#242526]">
      <div className="max-w-7xl px-4 mx-auto py-8">
        <Heading
          bgText={"Works"}
          text1={"My"}
          text2={"Projects"}
          bgColor={"text-[#fefefe0a]"}
        />
      
        <div className="grid md:grid-cols-2 gap-12 grid-cols-1">
          {/* Pinned Projects */}
          {pinnedProjects && pinnedProjects.length > 0 && (
            <>
              {pinnedProjects.map((project) => (
                <Project key={project.$id} Project={project} loading={loading} />
              ))}
            </>
          )}
          
          {/* Other Projects */}
          {otherProjects && otherProjects.length > 0 && (
            <>
              {otherProjects.map((project) => (
                <Project key={project.$id} Project={project} loading={loading} />
              ))}
            </>
          )}
        </div>

        {showSeeMore && otherProjects.length > 0 && (
          <button
            onClick={fetchMoreProjects}
            disabled={loading}
            className={`w-fit mx-auto block border relative border-primary-100 text-gray-100 font-semibold pl-10 hover:pl-4 pr-4 hover:pr-10 py-1 duration-300 group rounded-full mt-8 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className="w-8 h-8 p-2 absolute left-0 group-hover:left-[80%] duration-300 bg-primary-100 rounded-full top-0">
              <FaChevronDown className={`h-full w-full text-white ${loading ? 'animate-spin' : ''}`} />
            </div>
            {loading ? 'LOADING...' : 'VIEW MORE'}
          </button>
        )}
      </div>
    </section>
  );
}

export default Projects;