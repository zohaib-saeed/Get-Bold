import { createStyles } from '@mantine/core';

export const useFilterStyles = createStyles((theme) => ({
  filterMainWrapper: {
    padding: '1rem',
    backgroundColor: `${theme.colors.grays[0]}`,
    marginLeft: '1rem',
  },
  mainHeading: {
    paddingTop: '0',
    paddingBottom: '0.5rem',
    borderBottom: `2px solid ${theme.colors.primary[3]}`,
    fontSize: '20px',
    fontWeight: 'normal',
  },
  fitlerWrapper: {
    padding: '0.5rem 0.5rem 0.5rem 0',
    borderBottom: `2px solid ${theme.colors.primary[3]}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  minimizeIcon: {
    fontSize: `${theme.fontSizes.md}px`,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: '-8px',
    right: '-4.1px',
    cursor: 'pointer',
  },

  fitlerWrapperTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: '0.5rem 0rem',
  },
  checkboxes: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  swatch: {
    width: '40px',
    height: '15px',
    borderRadius: '0px',
  },
  colorSwatches: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  checkboxItem: {
    padding: '0.5rem 0',
    fontSize: `${theme.fontSizes.xs}px`,
    fontWeight: 'normal',
  },
  filterHeading: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
}));
