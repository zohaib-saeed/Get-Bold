import { createStyles } from '@mantine/core';

export const useLayoutStyles = createStyles(() => ({
  layout: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    minHeight: '100vh',
    // overflowX: 'hidden',
  },
}));
