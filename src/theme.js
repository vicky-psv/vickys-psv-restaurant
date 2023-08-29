import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2c4b81",
    },
    secondary: {
      main: "#0f6cb9",
    },
    background: {
      default: "#0f6cb9"
    }
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: ["Apple Chancery", "sans-serif"].join(","),
  },
});

export default theme;
