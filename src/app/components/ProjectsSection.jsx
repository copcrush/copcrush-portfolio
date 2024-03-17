"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "React Portfolio Website by using React (Next.js)",
    image: "/images/projects/portfolio-project.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/copcrush/copcrush-portfolio.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Forecasty Weather App",
    description: "Forecasty Weather App by using React",
    image: "/images/projects/forecasty-project.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/copcrush/forecasty-weather-app.git",
    previewUrl: "https://forecasty-weather.netlify.app/",
  },
  {
    id: 3,
    title: "Pokedex App",
    description:
      'Pokedex App by using React (Vite.js) If you want to see my code you should open with "npm run dev" cause of the website host has blocked to show it',
    image: "/images/projects/pokedex-project.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/copcrush/pokedex-app.git",
    previewUrl: "http://localhost:5173/",
  },
  {
    id: 4,
    title: "Image Search App by fetch API",
    description: "Image Search App by fetch API more description",
    image: "/images/projects/inprogress.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "JavaScript Project",
    description: "JavaScript description",
    image: "/images/projects/inprogress.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full stack Music Player by using Spotify API and MERN",
    description:
      "Full stack Music Player by using Spotify API and MERN description",
    image: "/images/projects/inprogress.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
