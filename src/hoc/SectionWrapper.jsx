import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => 
function HOC() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    return (
        <motion.section
            ref={ref}
            variants={staggerContainer()}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className={`${styles.padding} max-w-7xl 
            mx-auto relative z-0`}
            >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}


export default SectionWrapper