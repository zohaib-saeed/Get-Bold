import { createStyles } from '@mantine/core';

export const useHeroStyles = createStyles((theme) => ({
  hero: {},
  innerHeroSection: {
    background: theme.colors.gray[2],
    padding: '5rem 3rem 8rem',
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: '2rem 1rem',
      gridTemplateColumns: '1fr',
    },
  },
  subHeading: {
    marginTop: '1rem',
  },
  startBtn: {
    marginTop: '2rem',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '2rem 3rem',
    borderBottom: `10px solid ${theme.colors.primary[1]}`,
    background: theme.colors.grays[0],
    fontSize: theme.fontSizes.sm,
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      padding: '1rem 1.5rem',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: theme.fontSizes.xs,
      padding: '1rem 1.5rem',
    },
  },
  bottomLink: {
    textDecoration: 'none',
    cursor: 'pointer',
    borderBottom: `2px solid ${theme.colors.primary[1]}`,
    color: theme.colors.grays[5],
  },
}));
