import React from 'react';
import { motion } from 'framer-motion';
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './About.css';
import Hobbies from './Hobbies';
import {
  faBook,
  faFilm,
  faGamepad,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className='about'>
      <motion.div
        initial={{ opacity: 0, top: '10%' }}
        animate={{ opacity: 1, top: 0 }}
        exit={{ opacity: 0, top: '10%' }}
        className='about__container'
      >
        <div className='about__content'>
          <p className='title'>
            About<b>Me</b>
          </p>
          <hr className='hr' />
          <div className='bio'>
            <div className='bio__content'>
              <div className='left__bio'>
                <PersonIcon />
                <p>Name</p>
              </div>
              <div className='right__bio'>
                <p>Chandy Agusta Islamiano</p>
              </div>
            </div>
            <div className='bio__content'>
              <div className='left__bio'>
                <CalendarTodayIcon />
                <p>Date of Birth</p>
              </div>
              <div className='right__bio'>
                <p>July 13th 2002</p>
              </div>
            </div>
            <div className='bio__content'>
              <div className='left__bio'>
                <EmailIcon />
                <p>Email</p>
              </div>
              <div className='right__bio'>
                <p>chawklat3@pm.me</p>
              </div>
            </div>
            <div className='bio__content'>
              <div className='left__bio'>
                <LanguageIcon />
                <p>Web</p>
              </div>
              <div className='right__bio'>
                <p>chawklate.tech</p>
              </div>
            </div>
            <div className='bio__content'>
              <div className='left__bio'>
                <LocationOnIcon />
                <p>Address</p>
              </div>
              <div className='right__bio'>
                <p>Bondowoso, Indonesia</p>
              </div>
            </div>
          </div>
          <p className='title'>
            My<b>Hobbies</b>
          </p>
          <hr className='hr' />
          <div className='hobbies__container'>
            <Hobbies
              title='Read Manga or Novel'
              desc='I like reading manga and novels which genre action or dark fantasy and mystery.'
              icon={faBook}
            />
            <Hobbies
              title='Watch Anime'
              desc="When I'm free, I spend my time to watch some anime. My favorite is Attack On Titan."
              icon={faFilm}
            />
            <Hobbies
              title='Play Game'
              desc='I rarely play games, but I play when I just want to.'
              icon={faGamepad}
            />
            <Hobbies
              title='Drawing'
              desc="Sometimes I draw my favorite character. But I'm not really good at it."
              icon={faPalette}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
