import React from 'react';
import { motion } from 'framer-motion';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <motion.div
        initial={{ opacity: 0, top: '60%' }}
        animate={{ opacity: 1, top: '50%' }}
        exit={{ opacity: 0, top: '60%' }}
        className='portfolio__container'
      >
        <ErrorTwoToneIcon />
        <h1>Coming Soon!</h1>
      </motion.div>
    </div>
  );
};

export default Portfolio;
