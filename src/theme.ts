import { createTheme } from "@mui/material/styles";

// A custom theme for this app
export const theme = createTheme({
  typography: (palette) => ({
    fontFamily: "Manrope",
    allVariants: {
      font: "normal normal normal Manrope",
      color: "#072635",
    },
    subtitle1: {
      color: "#707070",
      font: "normal normal normal 14px/19px Manrope",
    },
    body1: {
      font: "normal normal normal 14px/19px Manrope",
    },
    h5: {
      font: "normal normal 800 24px/33px Manrope",
    },
  }),
  palette: {
    primary: {
      main: "#01F0D0",
    },
    // secondary: {
    //     main: '#19857b',
    // },
    // error: {
    //     main: red.A400,
    // },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        style: {
          color: "#072635",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        color: "primary",
        disableElevation: true,
        style: {
          minWidth: 122,
          height: 41,
          borderRadius: 41,
          color: "#072635",
          fontWeight: "bold",
          font: "normal normal bold 14px/19px Manrope",
          textTransform: "none",
        },
      },
      styleOverrides: {},
    },
  },
});

export default theme;
