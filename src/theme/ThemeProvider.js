import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "grey",
      disabled: "grey",
    },
    action: {
      disabled: "grey",
    },
  },
});

export default theme;
