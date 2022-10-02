import { createStyles } from '@mantine/core';

export const useChooseUsStyles = createStyles((theme) => ({
  chooseUs: {
    padding: '2rem 0rem',
    background: theme.colors.grays[0],
    marginBottom: '8rem',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      marginBottom: '5rem',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      marginBottom: '3rem',
    },
  },
  chooseUsHeading: {
    testAlign: 'left',
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bolder',
  },
  chooseUsSection: {
    display: 'grid',
    gridTemplateColumns: '0.7fr auto',
    gridGap: '2rem',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      gridTemplateColumns: '1fr',
    },
  },
  img: {
    width: '390px',
    height: '650px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      width: '100%',
      height: '400px',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: '100%',
      height: '350px',
    },
  },
  headingGreen: {
    display: 'block',
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bolder',
    marginBottom: '1rem',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      display: 'none',
    },
  },
  headingGreenSmall: {
    display: 'none',
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bolder',
    marginBottom: '1rem',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      display: 'block',
      marginBottom: '-1rem',
    },
  },
  sectionDetail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  items: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridGap: '0.7rem',
    marginTop: '2rem',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      gridTemplateColumns: 'auto',
      marginLeft: '30px',
    },
  },
  sectionDetail_description: {
    width: '95%',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      width: '100%',
    },
  },
  iconItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  iconItemTitle: {
    marginLeft: '1rem',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: '90%',
    },
  },
  iconItemImg: {
    width: '57px',
    height: '57px',
    minWidth: '57px',
    minHeight: '57px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
}));
