"use client";
import React, { useEffect } from "react";
import { projects } from "@/constants/projects";

function ProjectFilter({ activeCategory, setActiveCategory, setFiltered }) {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(projects);
      return;
    }
    const filtered = projects.filter((project) =>
      project.category.includes(activeCategory)
    );

    setFiltered(filtered);
  }, [activeCategory, setFiltered]);

  return (
    <div className="flex gap-5 my-10 px-20 max-xs:px-2 ">
      <button
        className={
          activeCategory == "all"
            ? "bg-black py-1 px-10 text-white rounded-lg "
            : null
        }
        onClick={() => setActiveCategory("all")}
      >
        All
      </button>
      <button
        className={
          activeCategory == "react"
            ? "bg-black py-1 px-10 text-white rounded-lg"
            : null
        }
        onClick={() => setActiveCategory("react")}
      >
        React
      </button>
      <button
        className={
          activeCategory == "Next.js"
            ? "bg-black py-1 px-10 text-white rounded-lg"
            : null
        }
        onClick={() => setActiveCategory("Next.js")}
      >
        Next.js
      </button>
      <button
        className={
          activeCategory == "WebSite"
            ? "bg-black py-1 px-10 text-white rounded-lg"
            : null
        }
        onClick={() => setActiveCategory("WebSite")}
      >
        WebSite
      </button>
      <button
        className={
          activeCategory == "Marketing"
            ? "bg-black py-1 px-10 text-white rounded-lg"
            : null
        }
        onClick={() => setActiveCategory("Marketing")}
      >
        Marketing
      </button>
      <button
        className={
          activeCategory == "Other"
            ? "bg-black py-1 px-10 text-white rounded-lg"
            : null
        }
        onClick={() => setActiveCategory("Other")}
      >
        Other
      </button>
    </div>
  );
}

export default ProjectFilter;
