import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    backgroundColor: '#ff8ba7',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  progressTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
  progressTitle: {
    fontWeight: '700',
  },
});

const ProgressBar = (props) => {
  const classes = useStyles();

  return (
    <div className='progress__bar'>
      <div className={classes.progressTitleContainer}>
        <p className={classes.progressTitle}>{props.title}</p>
        <p className={classes.progressTitle}>{props.progress}%</p>
      </div>
      <BorderLinearProgress variant='determinate' value={props.value} />
    </div>
  );
};

export default ProgressBar;
