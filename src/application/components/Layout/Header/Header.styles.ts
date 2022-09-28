import { createStyles } from '@mantine/core';

export const useHeaderStyles = createStyles((theme) => ({
  topBar: {
    backgroundColor: theme.colors.primary[2],
    fontSize: '15px',
    textAlign: 'center',
    padding: '8px 1rem',
    color: theme.colors.grays[0],
    marginBottom: '1rem',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: '10px',
    },
  },
  header: {
    padding: '0  0 0',
  },
  innerHeader: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gridGap: '30px',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      gridTemplateColumns: 'auto auto',
      gridGap: '5px',
    },
  },
  logo: {
    cursor: 'pointer',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      maxWidth: '145px !important',
    },
  },
  input: {
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      order: 5,
      gridColumn: '1/-1',
    },
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gridGap: '15px',
    justifyContent: 'flex-end',
  },
  actionItem: {
    display: 'flex',
    gridGap: '10px',
    cursor: 'pointer',
  },
  actionImg: {
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      maxWidth: '30px !important',
      display: 'flex',
      alignItems: 'center',
    },
  },
  actionItemData: {
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      display: 'none',
    },
  },
  topTitle: {
    fontSize: '12px',
  },

  title: {
    fontSize: '18px',
    lineHeight: 1,
  },
  cart: {
    display: 'flex',
    alignItems: 'center',
    gridGap: '10px',
    cursor: 'pointer',
  },
  cartNo: {
    fontSize: '18px',
  },
  mobileMenuBtn: {
    display: 'none',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      display: 'block',
    },
  },
  dividerContainer: {
    padding: '0 2.5rem',
    marginTop: '4px',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      marginTop: '1rem',
      padding: '0',
    },
  },
  categories: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    justifyContent: 'center',
    gridGap: '1rem',
    marginTop: '4px',

    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      display: 'none',
    },
  },
  category: {
    cursor: 'pointer',
  },
}));
