import { extendTheme } from '@chakra-ui/react';

import { Button } from './button';

// import { Input } from "./input";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3C00",
    },
  },
  fonts: {
    heading: 'Montserrat, sans-serif;',
    body: 'Montserrat, sans-serif;',
  },
  styles: {
    global: () => ({
      body: {
        color: "4D4D4D",
        bg: `#fefefe`,
      },
    }),
  },
  components: {
    Button,
    // Input, // not working for some reason - come back to this
  },
});
