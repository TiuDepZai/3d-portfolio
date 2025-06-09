import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div className='bg-[#1F2B3E] p-5 rounded-2xl sm:w-[360px] w-full border border-[#66FCFF] hover:border-[#FF4655] transition-colors duration-300'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-[#66FCFF] hover:border-[#FF4655] transition-colors duration-300'
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-[#ECE8E1] font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-[#8B8B8B] text-[14px]'>
            {description || 'No description provided.'}
          </p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, i) => (
            <p key={`${tag.name}-${i}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const getColorForLanguage = (lang) => {
  switch (lang.toLowerCase()) {
    case 'javascript': return 'text-yellow-400';
    case 'typescript': return 'text-blue-400';
    case 'html': return 'text-orange-400';
    case 'css': return 'text-blue-300';
    case 'python': return 'text-green-400';
    case 'java': return 'text-red-500';
    case 'c++': return 'text-purple-400';
    case 'c#': return 'text-indigo-400';
    case 'shell': return 'text-gray-400';
    default: return 'text-gray-500';
  }
};

const Works = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/TiuDepZai/repos', {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        });

        const data = await response.json();

        if (!Array.isArray(data)) {
          console.error('GitHub API error:', data);
          return;
        }

        const projectPromises = data.map(async (repo) => {
          const tags = [];

          const languageResponse = await fetch(repo.languages_url, {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          });
          const languages = await languageResponse.json();

          Object.keys(languages).forEach((lang) => {
            let displayName = lang.toLowerCase();
            if (displayName === 'c#') displayName = 'c-sharp';
            tags.push({ name: displayName, color: getColorForLanguage(lang) });

          });

          return {
            name: repo.name,
            description: repo.description,
            tags: tags,
            image: repo.owner.avatar_url,
            source_code_link: repo.html_url,
          };
        });

        const projectData = await Promise.all(projectPromises);
        setProjects(projectData);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };


    fetchProjects();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#66FCFF]`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-[#ECE8E1]`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-[#8B8B8B] text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through real-world examples.
          Each one is briefly described and links to the source code. It reflects my ability
          to solve problems, work with different technologies, and build things end-to-end.
        </motion.p>
      </div>

      {projects.length === 0 ? (
        <p className="text-white mt-10">Loading projects...</p>
      ) : (
        <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, 'projects');
