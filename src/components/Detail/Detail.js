import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import './Detail.css';

const Detail = () => {
  return (
    <Router forceRefresh={true}>
      <motion.div
        initial={{ opacity: 0, transform: 'scale(2.2)' }}
        animate={{ opacity: 1, transform: 'scale(1)' }}
        exit={{ opacity: 0, transform: 'scale(2.2)' }}
        className='detail'
      >
        <Link to='/portfolio'>
          <h1>Hello World</h1>
        </Link>
      </motion.div>
      <Switch>
        <Route
          path='/portfolio'
          render={() => {
            if (
              window.location.href === 'http://localhost:3000/portfolio/detail'
            ) {
              <Redirect to='/portfolio' />;
            }
          }}
        ></Route>
      </Switch>
    </Router>
  );
};

export default Detail;
