import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Azul principal
    },
    secondary: {
      main: "#f50057", // Rosa
    },
    background: {
      default: "#f4f4f4",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;
