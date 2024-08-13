import React from 'react';

function Project({ Project }) {
  return (
    <div className="flex flex-col h-full gap-4">
<div className="w-full relative pb-[56.25%] overflow-hidden rounded-md">
        <img 
          className="absolute top-0 left-0 w-full h-full object-cover object-center" 
          src={Project.Image} 
          alt={Project.Project_Name} 
        />
      </div>    
      <div className="flex flex-col flex-grow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl text-primary-100">{Project.Project_Name}</h2>
        <p className="text-xs font-bold py-1 px-2 bg-white opacity-60 text-gray-700 rounded-full">
          {Project.category}
        </p>
      </div>
      <p className="text-gray-400 text-sm md:text-[16px] mb-4 flex-grow">{Project.Description}</p>
      <div className="flex gap-4 ">
        {Project.preview && (
          <a 
            href={Project.preview} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 text-center border border-primary-100 hover:border-primary-200 hover:bg-grey-25 text-white py-1 px-4 rounded-full transition duration-300"
          >
            Live Preview
          </a>
        )}
        {Project.github && (
          <a 
            href={Project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 text-center border border-primary-100 hover:border-primary-200 hover:bg-grey-25 text-white py-1 px-4 rounded-full transition duration-300"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  </div>
    
  );
}

export default Project;