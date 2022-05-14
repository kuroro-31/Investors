import { extendTheme } from '@chakra-ui/react';

import { Button } from './button';

// import { Input } from "./input";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3C00",
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.200",
      },
    }),
  },
  components: {
    Button,
    // Input, // not working for some reason - come back to this
  },
});
