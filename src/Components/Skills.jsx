import React, { useRef } from 'react';
import SkillCircle from './SkillCircle';
import Heading from './Heading';

function Skills() {
  const skills = [
    { skill: 'HTML & CSS', percentage: 90 },
    { skill: 'JAVASCRIPT', percentage: 85 },
    { skill: 'REACT', percentage: 75 },
    { skill: 'TAILWIND', percentage: 80 },
    { skill: 'JQUERY', percentage: 55 },
    { skill: 'BOOTSTRAP', percentage: 55 },
    { skill: 'APPWRITE', percentage: 75 },
    { skill: 'NODE JS', percentage: 70 },
    { skill: 'EXPRESS', percentage: 50 },
    { skill: 'SQL', percentage: 80 },
    { skill: 'POSTGRESQL', percentage: 70 },
    { skill: 'MONGODB', percentage: 50 },
  ];

  const skillsRef = useRef(null);


  return (
    <section ref={skillsRef} className='text-gray-100'>
      <div className='max-w-7xl px-4 mx-auto py-8'>
        {/* Header */}
        <Heading bgText={"Skills"} text1={"My"} text2={"Skills"} bgColor={"text-grey-5"} />

        {/* Body */}
        <div className="flex flex-wrap items-center justify-center  md:gap-16 gap-8 mb-16">
          {skills.map((skill, index) => (
            <SkillCircle key={index} skill={skill.skill} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;