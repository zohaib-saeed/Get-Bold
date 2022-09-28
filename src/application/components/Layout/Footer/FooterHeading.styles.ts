import { createStyles } from '@mantine/core';

export const useFooterHeadingStyles = createStyles((theme) => ({
  footerHeading: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    fontFamily: 'Poppins',
    color: theme.colors.grays[0],
  },
}));
