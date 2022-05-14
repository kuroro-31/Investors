import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "3px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "linear-gradient(to left top, #6DB2E8, #5B6AF7)",
      _hover: {
        bg: "#0077ed",
      },
    },
    outline: {
      color: "#5B6AF7",
      bg: "transparent",
      border: "1px solid",
      borderColor: "#5B6AF7",
      _hover: {
        color: "#5B6AF7",
        bg: "#fff",
      },
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};
