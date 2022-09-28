import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  fontFamily: 'Poppins, sans-serif',
  colorScheme: 'light',
  focusRing: 'always',
  // primaryColor: '#269D49',
  colors: {
    // Add your color
    primary: ['#DEF1E4', '#269D49', '#2A4431'],
    grays: [
      '#FFFFFF',
      'rgba(255,255,255,0.73)',
      '#E5E5E7',
      '#707070',
      '#959595',
      '#35393C',
      '#222222',
    ],
    semantic: ['#238564', '#1A6149', '#D7373F', '#AA2228'],
  },
  breakpoints: {
    xs: 375,
    sm: 480,
    md: 768,
    lg: 976,
    xl: 1280,
  },

  shadows: {
    // md: '1px 1px 3px rgba(0, 0, 0, .25)',
    // xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Inter, sans-serif',
  },
  fontSizes: {
    xs: 16,
    sm: 18,
    md: 20,
    lg: 35,
    xl: 50,
  },
};
