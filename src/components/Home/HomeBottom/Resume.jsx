import React from 'react';
import { motion } from 'framer-motion';
import { services } from './constants';
import { fadeIn, textVariant } from './utils/motion';
import { SectionWrapper } from './hoc';
import "./index.css"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="card-gradient">
      <div className="card-content">
        <img src={icon} alt={title} />
        <h3>{title}</h3>
      </div>
    </motion.div>
  );
};

const Resume = () => {
  return (
    <div style={{ marginTop: '-6rem' }}>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">Introduction</p>
        <h2 className="section-head-text">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 section-sub-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea
        quaerat alias accusamus voluptas autem! Alias odit voluptates in totam
        vitae dignissimos minus eaque culpa unde tempore dolore aperiam
        obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde
        veniam dolorum ipsum doloribus.
      </motion.p>

      <div className="mt-20 flex-center" style={{ gap: '40px', flexWrap: 'wrap' }}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Resume, 'resume');
