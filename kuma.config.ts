import { createTheme } from '@kuma-ui/core';

const theme = createTheme({
  colors: {
    background: '#fff5f5',
    text: '#141313',
  },
  spacings: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
  },
  breakpoints: {
    sm: '400px',
    md: '700px',
  },
  components: {
    Button: {
      defaultProps: {},
    },
  },
});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme;
