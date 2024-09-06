import React, { useEffect, useState } from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { language } from '../constants';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded 2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

const Works = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/TiuDepZai/repos');
        const data = await response.json();

        const projectPromises = data.map(async repo => {
          const tags = [];

          // Fetch languages used in the repository
          const languageResponse = await fetch(repo.languages_url);
          const languages = await languageResponse.json();

          Object.keys(languages).forEach(lang => {
            const languageTag = language[lang.toLowerCase()];
            if (languageTag) {
              tags.push({ name: lang.toLowerCase(), color: languageTag });
            }
          });



          return {
            name: repo.name,
            description: repo.description,
            tags: tags,
            image: repo.owner.avatar_url, // Using the owner's avatar as the project image
            source_code_link: repo.html_url,
          };
        });

        const projectData = await Promise.all(projectPromises);
        setProjects(projectData);
      } catch (error) {
        console.error('Error fetching GitHub repositories', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What have I done?
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 0.8)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Projects I have done
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Works, 'projects');
