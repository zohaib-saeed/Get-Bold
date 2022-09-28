import { createStyles } from '@mantine/core';

export const useColorBoxStyles = createStyles((theme, { color }: { color: string }) => ({
  colorBox: {
    width: '21px',
    height: '21px',
    borderRadius: '3px',
    background: color || '#000',
    cursor: 'pointer',
  },
}));
