import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#66FCFF]`}>My skills</p>
        <h2 className={`${styles.sectionHeadText} text-[#ECE8E1]`}>Technologies.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {technologies.map((technology, index) => (
          <motion.div 
            className='w-28 h-28' 
            key={technology.name}
            variants={fadeIn('right', 'spring', 0.1 * index, 0.75)}
          >
            <div className='w-full h-full rounded-full border-2 border-[#66FCFF] hover:border-[#FF4655] 
              flex items-center justify-center transition-colors duration-300 bg-[#1F2B3E]'>
              <img src={technology.icon} alt={technology.name} className='w-16 h-16' />
            </div>
            <p className='text-center mt-2 text-[#ECE8E1] text-sm'>{technology.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech');