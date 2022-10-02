import { createStyles } from '@mantine/core';

export const useCustomShirtStyles = createStyles((theme) => ({
  customShirts: {
    backgroundColor: `${theme.colors.backgrounds[0]}`,
  },
  pathWrapper: {
    width: '100%',
    padding: '1rem 0rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
    paddingLeft: '1rem',
  },
  customShirtsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0',
    maxWidth: `${theme.breakpoints.xl}px`,
    width: '100vw',
  },
  routePath: {
    fontSize: '16px',
    fontWeight: 'normal',
  },
  heroSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '450px',
    width: '100vw',
    backgroundColor: '#354F52',
  },
  heroContent: {
    maxWidth: `${theme.breakpoints.xl}px`,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    placeContent: 'space-between',
  },
  heroSectionLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: '1rem',
  },
  heroHeading: {
    color: 'white',
    marginBottom: '2rem',
  },
  heroDescription: {
    color: 'white',
    fontWeight: 'normal',
  },
  heroRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  heroImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '512px',
    height: '439px',
  },
  filterAndProducts: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '0.3fr 1fr',
    gridGap: '1.5rem',
    placeContent: 'start',
    padding: '3rem 0rem',
  },
}));
