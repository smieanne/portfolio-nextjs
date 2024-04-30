"use client";
import React, { useState } from "react";
import { AiFillBulb } from "react-icons/ai";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { AnimatePresence } from "framer-motion";

function Projects() {
  //フィルタ用
  const [activeCategory, setActiveCategory] = useState("all");
  const [filtered, setFiltered] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const loadMoreProjects = () => {
    setVisibleProjects((preVisibleProjects) => preVisibleProjects + 6);
  };

  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block ">
          <p className="text-black text-5xl  font-medium py-5 px-10 flex igap-2 max-sm:px-2">
            Works
          </p>
        </div>

        {/* フィルター */}
        <ProjectFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setFiltered={setFiltered}
        />

        {/* カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          <AnimatePresence>
            {filtered.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                overviewtitle={project.overviewtitle}
                overview={project.overview}
                messagetitle={project.messagetitle}
                message={project.message}
                githubUrl={project.githubUrl}
                image={project.image}
                projectUrl={project.projectUrl}
                deployed={project.deployed}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* もっとみる */}
        {visibleProjects < filtered.length && (
          <div className="text-center mt-4 mb-20">
            <button
              className="bg-black text-white px-2  rounded-md py-1 hover:bg-black/75"
              onClick={loadMoreProjects}
            >
              See more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
