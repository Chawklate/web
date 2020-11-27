import React from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';
import Certificate from './Certificate';
import dataCertificate from './dataCertificate';
import './Resume.css';

const Resume = () => {
  return (
    <div className='resume'>
      <motion.div
        initial={{ opacity: 0, top: '10%' }}
        animate={{ opacity: 1, top: 0 }}
        exit={{ opacity: 0, top: '10%' }}
        className='resume__container'
      >
        <div className='resume__content'>
          <p className='title'>
            My<b>Skills</b>
          </p>
          <hr className='hr' />
          <div className='progressBar__container'>
            <ProgressBar title='JavaScript' progress='70' value={70} />
            <ProgressBar title='ReactJS' progress='40' value={40} />
            <ProgressBar title='Python' progress='40' value={40} />
            <ProgressBar title='PHP' progress='50' value={50} />
            <ProgressBar title='NodeJS' progress='40' value={40} />
            <ProgressBar title='C/C++' progress='15' value={15} />
            <ProgressBar title='CSS3' progress='70' value={70} />
            <ProgressBar
              title='Network Administration'
              progress='60'
              value={60}
            />
          </div>
          <p className='title'>
            My<b>Experience</b>
          </p>
          <hr className='hr' />
          <div className='experience__container'>
            <div className='card__experience'>
              <p>2019 - 2020</p>
              <p>Practical Work at PT. Vitya Persada Informatika</p>
              <div className='bottom__cardExperience'>
                <div className='left__side'>
                  <LocationOnIcon fontSize='small' />
                  <p>Jakarta, Indonesia</p>
                </div>
                <div className='right__side'>
                  <LanguageIcon fontSize='small' />
                  <p>
                    <a href='https://vipernetwork.net'>vipernetwork.net</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className='title'>
            My<b>Certificates</b>
          </p>
          <hr className='hr' />
          <div className='certificate__container'>
            {dataCertificate.map((data) => {
              return <Certificate key={data.title} data={data} />;
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
