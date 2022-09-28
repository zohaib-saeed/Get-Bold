import { createStyles } from '@mantine/core';

export const useProductCardStyles = createStyles((theme) => ({
  productCard: {
    display: 'grid',
    height: '100%',
    gridTemplateRows: 'auto 1fr',
  },
  productImg: {
    position: 'relative',
    width: '100%',
    height: '500px',
  },
  productDesc: {
    padding: '1rem',
    border: `.5px solid ${theme.colors.grays[3]}`,
    borderTop: 'unset',
    display: 'grid',
    gridTemplateRows: '1fr auto',
  },
  topDesc: {
    display: 'grid',
    gridTemplateRows: '1fr auto',
  },
  productHeading: {
    fontWeight: 500,
  },
  productBottomSizeAndQuote: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '8px',
    marginTop: '1rem',
    borderTop: `.5px solid ${theme.colors.grays[3]}`,
  },
  getAQuoteCta: {
    cursor: 'pointer',
  },
  getAQuote: {
    fontWeight: 500,
  },
  label: {
    position: 'absolute',
    top: 25,
    right: 25,
  },
}));
