import { createStyles } from '@mantine/core';

export const useResponsiveHeadingStyles = createStyles((theme) => ({
  textColor: {
    color: theme.colors.grays[6],
  },
  h1: {
    fontSize: theme.fontSizes.xl,
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: theme.fontSizes.lg,
    },
  },
  h2: {
    fontSize: theme.fontSizes.lg,
    color: theme.colors.grays[6],
  },
  green: {
    color: theme.colors.semantic[1],
  },
  text: {
    fontSize: theme.fontSizes.sm,
    margin: 0,
  },
  text2: {
    fontSize: theme.fontSizes.md,
    margin: 0,
  },
}));
