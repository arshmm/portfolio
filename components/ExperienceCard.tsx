import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[650px] mt-12 snap-center bg-[#292929] p-10 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src={urlFor(experience.comapanyImage).url()}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0  md:px-10">
        <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
        <p className="font-semibold text-xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-1">
          {experience.technilogies.map((tec) => (
            <img
              key={tec._id}
              className="h-8 w-8 rounded-full"
              src={urlFor(tec.image).url()}
            />
          ))}
        </div>
        <p className="py-2 text-gray-300">
          Started work : {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingThere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-sm h-20 overflow-auto scrollbar scrollbar-track-grey-400/20 scrollbar-thumb-red-600/10">
          {experience.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
