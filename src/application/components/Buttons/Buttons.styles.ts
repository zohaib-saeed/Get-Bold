import { createStyles } from '@mantine/core';

export const useButtonStyles = createStyles((theme) => ({
  primary: {
    fontSize: theme.fontSizes.xs,
    padding: '8px 1rem',
    background: '#269D49',
    borderRadius: '15px',
    transition: 'all .3s linear',
    '&:hover': {
      background: theme.colors.primary[2],
      borderRadius: '20px',
      transition: 'all .3s linear',
    },
    '&:active': {
      background: theme.colors.primary[2],
      borderRadius: '20px',
      transition: 'all .3s linear',
    },
    '&:focus': {
      outlineOffset: 0,
      outline: `3px solid ${theme.colors.semantic[0]}`,
      borderRadius: '20px',
      transition: 'all .3s linear',
    },
  },
}));
