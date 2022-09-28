import { createStyles } from '@mantine/core';

export const useSellersStyles = createStyles((theme) => ({
  sellers: {
    padding: '2rem 0 4rem',
    background: theme.colors.grays[2],
  },
  bestSellersWithButtons: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionIconBack: {
    color: theme.colors.grays[0],
    background: theme.colors.primary[2],
    '&:hover': {
      background: theme.colors.primary[1],
    },
  },
  actionIconNormal: {
    color: theme.colors.primary[2],
    background: theme.colors.primary[0],
    '&:hover': {
      background: theme.colors.primary[1],
      color: theme.colors.grays[0],
    },
  },
  carouselContainer: {
    marginTop: '2rem',
  },
}));
