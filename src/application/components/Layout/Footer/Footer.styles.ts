import { createStyles } from '@mantine/core';

export const useFooterStyles = createStyles((theme) => ({
  footer: {
    background: theme.colors.primary[2],
    color: theme.colors.grays[0],
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      paddingBottom: '1.5rem',
    },
  },
  innerFooter: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '1.5rem',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      gridTemplateColumns: '1fr 1fr',
      gridGap: 0,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      gridTemplateColumns: '1fr',
      gridGap: '1.5rem',
    },
  },
  footerCol: {
    padding: '5rem 2.5rem',
    display: 'flex',
    flexDirection: 'column',
    gridGap: '1rem',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      padding: '2rem 1.5rem 0',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: '1.5rem 1rem 0',
    },
  },
  borderLeft: {
    borderLeft: `.7px solid ${theme.colors.grays[3]}`,
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      borderLeft: 0,
    },
  },
  responsiveBorderLeft: {
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      borderLeft: 0,
    },
  },
  footerLink: {
    color: theme.colors.grays[1],
    fontSize: theme.fontSizes.xs,
  },
  subLinks: {
    marginTop: '8px',
    marginBottom: '1rem',
    cursor: 'pointer',
  },
  subLink: {
    marginLeft: '1rem',
  },
  contactUs: {
    marginTop: '4rem',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      marginTop: '1.5rem',
    },
  },
  followUs: {
    margin: '2rem 0 0',
  },
  socials: {
    display: 'flex',
    alignItems: 'center',
    gridGap: '1rem',
  },
  socialLink: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.colors.grays[0],
  },
}));
