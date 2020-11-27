import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTelegram,
  faGithub,
  faTwitter,
  faLine,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='welcome'>
      <motion.div
        initial={{ opacity: 0, top: '60%' }}
        animate={{ opacity: 1, top: '50%' }}
        exit={{ opacity: 0, top: '60%' }}
        className='welcome__container'
      >
        <div
          className='profile'
          style={{
            backgroundImage: `url(https://i.pinimg.com/originals/56/91/07/569107b95f8890f2e37fd0e6cf90ce94.jpg)`,
          }}
        ></div>
        <div className='welcome__text'>
          <h2>Hi, there! I'm</h2>
          <h1>Chandy Agusta Islamiano</h1>
        </div>
        <p className='username'>@Chawklate</p>
        <p>
          Just a student who loves JavaScript. I like watching anime, reading
          manga, and doing useful things. Tech enthusiast and I use Arch btw.
        </p>
        <div className='social__media'>
          <a href='https://t.me/Chawklate'>
            <FontAwesomeIcon icon={faTelegram} size='2x' color='#594a4e' />
          </a>
          <a href='https://twitter.com/agustachan'>
            <FontAwesomeIcon icon={faTwitter} size='2x' color='#594a4e' />
          </a>
          <a href='https://github.com/Chawklate'>
            <FontAwesomeIcon icon={faGithub} size='2x' color='#594a4e' />
          </a>
          <div className='discord'>
            <FontAwesomeIcon icon={faDiscord} size='2x' color='#594a4e' />
            <div className='discord__text'>
              <p>Agusta#7777</p>
            </div>
          </div>
          <a href='https://line.me/ti/p/agusta1307'>
            <FontAwesomeIcon icon={faLine} size='2x' color='#594a4e' />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
