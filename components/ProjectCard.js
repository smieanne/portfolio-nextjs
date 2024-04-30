import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion";

function ProjectCard({
  name,
  overviewtitle,
  overview,
  messagetitle,
  message,
  githubUrl,
  image,
  projectUrl,
  deployed,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 py-4 border border-gray-200 rounded-lg bg-whitesmoke shadow-md "
    >
      <h3 className="ml-2 mb-2 text-xl ">{name}</h3>
      <img
        src={image}
        alt={`${name} Image`}
        className="w-full h-52 mb-2 px-3"
      />

      <p className="ml-3 mt-3 ">{overviewtitle}</p>
      <p className="ml-3  ">{overview}</p>
      <p className="ml-3 mt-3 ">{messagetitle}</p>
      <p className="ml-3 ">{message}</p>

      <div className=" flex flex-row justify-end ">
        {deployed ? (
          <a
            href={projectUrl}
            target="blank"
            className="text-pink-700 pr-1  rounded-full text-2xl hover:text-black "
          >
            <GoLinkExternal />
          </a>
        ) : null}

        <a
          href={githubUrl}
          target="blank"
          className="text-pink-700 pr-5 rounded-full text-2xl hover:text-black "
        >
          <AiFillGithub />
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
