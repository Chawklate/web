import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import CardTravelTwoToneIcon from '@material-ui/icons/CardTravelTwoTone';
import './App.css';

const App = () => {
  // Change it with your own domain
  const url = 'https://chawklate.tech/';
  const urlTwo = 'https://chawklate-a733d.web.app/';
  const urlThree = 'https://chawklate-a733d.firebaseapp.com/';

  const active = (e) => {
    const navItems = document.querySelectorAll('.navbar__items');
    if (
      e.target.className === 'navbar__items' ||
      e.target.tagName === 'path' ||
      e.target.tagName === 'svg' ||
      e.target.tagName === 'DIV'
    ) {
      navItems.forEach((nav) => {
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
        }
      });
      if (e.target.className === 'navbar__items') {
        e.target.classList.add('active');
      } else if (e.target.className === 'nav__titles') {
        e.target.parentElement.classList.add('active');
      }
    }
  };

  return (
    <Router>
      <div className='app'>
        <div className='app__container'>
          <div className='left__item'>
            <div
              className='img'
              style={{
                backgroundImage: `url(https://i.pinimg.com/originals/56/91/07/569107b95f8890f2e37fd0e6cf90ce94.jpg)`,
              }}
            ></div>
          </div>
          <div className='right__item'>
            <div className='rightItem__navbar'>
              <div className='navbar'>
                <Link
                  to='/'
                  className={
                    window.location.href === url ||
                    window.location.href === urlTwo ||
                    window.location.href === urlThree
                      ? 'navbar__items active'
                      : 'navbar__items'
                  }
                  id='about'
                  onClick={active}
                >
                  <HomeTwoToneIcon className='nav__icons' fontSize='large' />
                  <div className='nav__titles'>Home</div>
                </Link>
                <Link
                  to='/resume'
                  className={
                    window.location.href === `${url}resume` ||
                    window.location.href === `${urlTwo}resume` ||
                    window.location.href === `${urlThree}resume`
                      ? 'navbar__items active'
                      : 'navbar__items'
                  }
                  id='resume'
                  onClick={active}
                >
                  <DescriptionTwoToneIcon
                    className='nav__icons'
                    fontSize='large'
                  />
                  <div className='nav__titles'>Resume</div>
                </Link>
                <Link
                  to='/portfolio'
                  className={
                    window.location.href === `${url}portfolio` ||
                    window.location.href === `${urlTwo}portfolio` ||
                    window.location.href === `${urlThree}portfolio`
                      ? 'navbar__items active'
                      : 'navbar__items'
                  }
                  id='portfolio'
                  onClick={active}
                >
                  <CardTravelTwoToneIcon
                    className='nav__icons'
                    fontSize='large'
                  />
                  <div className='nav__titles'>Portfolio</div>
                </Link>
                <Link
                  to='/about'
                  className={
                    window.location.href === `${url}about` ||
                    window.location.href === `${urlTwo}about` ||
                    window.location.href === `${urlThree}about`
                      ? 'navbar__items active'
                      : 'navbar__items'
                  }
                  id='contact'
                  onClick={active}
                >
                  <PersonOutlineTwoToneIcon
                    className='nav__icons'
                    fontSize='large'
                  />
                  <div className='nav__titles'>About</div>
                </Link>
              </div>
            </div>
            <div className='rightItem__content'>
              <AnimatePresence exitBeforeEnter>
                <Switch>
                  <Route path='/' exact>
                    <Home />
                  </Route>
                  <Route path='/resume'>
                    <Resume />
                  </Route>
                  <Route path='/portfolio'>
                    <Portfolio />
                  </Route>
                  <Route path='/about'>
                    <About />
                  </Route>
                </Switch>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
