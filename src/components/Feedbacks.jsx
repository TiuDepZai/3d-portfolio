import { motion } from "framer-motion";
import { styles } from '../styles';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion'

import { testimonials } from "../constants";

const FeedbackCard = (
  {index, testimonial, name, designation, company,image}
) =>{
  return (
    <motion.div
      variants={fadeIn("","spring",index * 0.5,0.75)}
      className="bg-[#1F2B3E] p-10 rounded-3xl xs:w-[320px] w-full border border-[#66FCFF] 
        hover:border-[#FF4655] transition-colors duration-300"
    >
      <p className="text-[#ECE8E1] font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-[#ECE8E1] tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-[#ECE8E1] font-medium text-[16px]">
              <span className="text-[#66FCFF]">@</span> {name}
            </p>
            <p className="mt-1 text-[#8B8B8B] text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img src={image} alt={`feedback-by-${name}`} 
          className="w-10 h-10 rounded-full object-cover"/>
        </div>
      </div>
      
    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-[#1F2B3E] rounded-[20px]">
      <div className={`${styles.padding} bg-[#1F2B3E] rounded-2xl
      min-h-[300px]`}>
          <motion.div 
            variants={textVariant()}
          >
            <p className={`${styles.sectionSubText} text-[#66FCFF]`}>What others say</p>
            <h2 className={`${styles.sectionHeadText} text-[#ECE8E1]`}>Testimonials.</h2>
          </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex
      flex-wrap gap-7`}>
        {testimonials.map((testimonial,index)=>(
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />

        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, 'feedback')