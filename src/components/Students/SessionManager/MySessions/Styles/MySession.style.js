import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    MySessionContainer: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      padding: '10px',
      justifyContent: 'center',
    },
    MySessionCard: {
      [theme.breakpoints.down('md')]: {
        width: '48%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: '48%',
        color: 'green',
      },
      [theme.breakpoints.up('lg')]: {
        width: '32%',
        color: 'blue',
      },
    },
  };
});
