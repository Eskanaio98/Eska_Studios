'use client';
import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "Blender - Coffee",
    description: "My first 3d project after I left university. Coffee Anyone?",
    image: "images/coffee.png",
    tag: ["All", "3D Art"],
    gitUrl: "https://drive.google.com/file/d/1C7qWXCsG65Xe8hbtf7fB1Pw4kE7ITAwb/view?usp=sharing",
    previewUrl: "https://drive.google.com/file/d/1GJPZDSjc4BywbPlz1RH3crvNgkbeQWZw/view?usp=sharing"
  },
  {
    id: 2,
    title: "Blender - Whiskey",
    description: "If not a coffee, why not try a whiskey?",
    image: "images/whiskey.png",
    tag: ["All", "3D Art"],
    gitUrl: "https://drive.google.com/file/d/1vDL8vpvANC8uG-bj4Qw9abB49jS0hXKc/view?usp=sharing",
    previewUrl: "https://drive.google.com/file/d/12qJZ8P9sEbPiwjLqVln56uH37VWAD-ko/view?usp=sharing"
  },
  {
    id: 3,
    title: "Blender - Ocean",
    description: "Just an ocean with some stuff laying around.",
    image: "images/ocean.png",
    tag: ["All", "3D Art"],
    gitUrl: "https://drive.google.com/file/d/1hkxUTPqddGv6CU8VR0Ljmi6W-GZzflCu/view?usp=sharing",
    previewUrl: "https://drive.google.com/file/d/17DdmOgcCVQHRhzgJ0uQCA70BjzqDTRCc/view?usp=sharing"
  },
  {
    id: 4,
    title: "Blender - TV",
    description: "A TV project for the PA Winter Show 2023.",
    image: "images/tv.png",
    tag: ["All", "Animation"],
    gitUrl: "/",
    previewUrl: "https://drive.google.com/file/d/1QY1Z5bziOlo7ZgZ0EZsr0tdCUvIFNJjL/view?usp=sharing"
  },
  {
    id: 5,
    title: "Blender - Lunar New Year Statues",
    description: "Statues displayed for Lunar New Year 2024.",
    image: "images/statue.png",
    tag: ["All", "Animation"],
    gitUrl: "",
    previewUrl: "https://drive.google.com/file/d/10lh4BUF7dJcMyQGj3yx7A2t_NU-tMrol/view?usp=sharing"
  },
  {
    id: 6,
    title: "Unity - Labryinth RPG Demo team project (Miller's Work)",
    description: "A demo progress of what I have done for the game as a part of the team project.",
    image: "images/swordslash.png",
    tag: ["All", "Games Design"],
    gitUrl:"",
    previewUrl:"https://drive.google.com/file/d/1birPzFq1o1Hrp9jj4WWiP34RLZcKD_FJ/view?usp=sharing"
  },
  {
    id: 7,
    title: "Birthday Project: Amy!",
    description: "A birthday animation made for a friend of mine back from late april 2024.",
    image: "images/birthday.png",
    tag: ["All", "Animation", "3D Art"],
    gitUrl:"",
    previewUrl:"https://drive.google.com/file/d/1U0w8oLUzU-S8bl_UOfRsaiBvxpbne3ID/view?usp=sharing"
  }
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity:0},
    animate: { y: 0, opacity: 1},
  };

  return (
    <section id="projects">
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === 'All'} />
        <ProjectTag onClick={handleTagChange} name="3D Art" isSelected={tag === '3D Art'} />
        <ProjectTag onClick={handleTagChange} name="Animation" isSelected={tag === 'Animation'} />
        <ProjectTag onClick={handleTagChange} name="Games Design" isSelected={tag === 'Games Design'} />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li 
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
          <ProjectCard 
           key={project.id} 
           title={project.title} 
           description={project.description} 
           imgUrl={project.image}
           tag={project.tag}
           gitUrl={project.gitUrl}
           previewUrl={project.previewUrl}
          />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;