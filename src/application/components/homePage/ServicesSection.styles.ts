import { createStyles } from '@mantine/core';

export const useServicesStyles = createStyles((theme) => ({
  services: {
    padding: '5rem 0',
  },
  servicesHeading: {
    textAlign: 'center',
  },
  servicesSection: {
    marginTop: '1rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1.5rem',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      gridTemplateColumns: '1fr',
      gridGap: '1rem',
    },
  },
  leftFeaturedImg: {
    position: 'relative',
    display: 'flex',
  },
  featuredProductHeading: {
    marginTop: '1rem',
  },
  description: {
    marginTop: '1rem',
  },
  rightFeaturedProducts: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gridGap: '1rem',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'unset',
    },
  },
  featuredProduct: {
    display: 'grid',
    gridTemplateRows: '1fr auto',
  },
  featuredProductImg: {
    width: '100%',
    height: '100%',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      minHeight: '350px',
    },
    position: 'relative',
  },
  productCategory: {
    padding: '8px 1rem',
    fontWeight: 'bold',
  },
  productCta: {
    display: 'flex',
    alignItems: 'center',
    gridGap: '8px',
    cursor: 'pointer',
  },
}));
