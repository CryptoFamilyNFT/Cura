/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createTheme } from "@mui/material";
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});