import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
// TODO: Fonts should be loaded dynamically, preferably using suspense
// TODO: Should try using variable fonts and check if that is compatible with PDF exporter
import QuicksandLightTTF from "../assets/fonts/Quicksand/Quicksand-Light.ttf";
import QuicksandLightEOT from "../assets/fonts/Quicksand/Quicksand-Light.eot";
import QuicksandLightWOFF from "../assets/fonts/Quicksand/Quicksand-Light.woff";
import QuicksandLightWOFF2 from "../assets/fonts/Quicksand/Quicksand-Light.woff2";
import QuicksandRegularTTF from "../assets/fonts/Quicksand/Quicksand-Regular.ttf";
import QuicksandRegularEOT from "../assets/fonts/Quicksand/Quicksand-Regular.eot";
import QuicksandRegularWOFF from "../assets/fonts/Quicksand/Quicksand-Regular.woff";
import QuicksandRegularWOFF2 from "../assets/fonts/Quicksand/Quicksand-Regular.woff2";
import QuicksandMediumTTF from "../assets/fonts/Quicksand/Quicksand-Medium.ttf";
import QuicksandMediumEOT from "../assets/fonts/Quicksand/Quicksand-Medium.eot";
import QuicksandMediumWOFF from "../assets/fonts/Quicksand/Quicksand-Medium.woff";
import QuicksandMediumWOFF2 from "../assets/fonts/Quicksand/Quicksand-Medium.woff2";
import QuicksandSemiBoldTTF from "../assets/fonts/Quicksand/Quicksand-SemiBold.ttf";
import QuicksandSemiBoldEOT from "../assets/fonts/Quicksand/Quicksand-SemiBold.eot";
import QuicksandSemiBoldWOFF from "../assets/fonts/Quicksand/Quicksand-SemiBold.woff";
import QuicksandSemiBoldWOFF2 from "../assets/fonts/Quicksand/Quicksand-SemiBold.woff2";
import QuicksandBoldTTF from "../assets/fonts/Quicksand/Quicksand-Bold.ttf";
import QuicksandBoldEOT from "../assets/fonts/Quicksand/Quicksand-Bold.eot";
import QuicksandBoldWOFF from "../assets/fonts/Quicksand/Quicksand-Bold.woff";
import QuicksandBoldWOFF2 from "../assets/fonts/Quicksand/Quicksand-Bold.woff2";

function Theme({ primaryColor = "#05C154", children }) {
  // TODO: Should write a component or a hook to handle providing the fonts
  const quicksandLight = {
    fontFamily: "Quicksand",
    src: `url('${QuicksandLightEOT}.eot')`,
    src: `url('${QuicksandLightEOT}?#iefix') format('embedded-opentype'),
    url('${QuicksandLightWOFF2}') format('woff2'),
    url('${QuicksandLightWOFF}') format('woff'),
    url(${QuicksandLightTTF}) format('ttf')`,
    fontWeight: 300,
    fontStyle: "normal",
    fontDisplay: "swap",
  };
  const quicksandRegular = {
    fontFamily: "Quicksand",
    src: `url('${QuicksandRegularEOT}.eot')`,
    src: `url('${QuicksandRegularEOT}?#iefix') format('embedded-opentype'),
        url('${QuicksandRegularWOFF2}') format('woff2'),
        url('${QuicksandRegularWOFF}') format('woff'),
        url(${QuicksandRegularTTF}) format('ttf')`,
    fontWeight: 400,
    fontStyle: "normal",
    fontDisplay: "swap",
  };
  const quicksandMedium = {
    fontFamily: "Quicksand",
    src: `url('${QuicksandMediumEOT}.eot')`,
    src: `url('${QuicksandMediumEOT}?#iefix') format('embedded-opentype'),
        url('${QuicksandMediumWOFF2}') format('woff2'),
        url('${QuicksandMediumWOFF}') format('woff'),
        url(${QuicksandMediumTTF}) format('ttf')`,
    fontWeight: 500,
    fontStyle: "normal",
    fontDisplay: "swap",
  };
  const quicksandSemiBold = {
    fontFamily: "Quicksand",
    src: `url('${QuicksandSemiBoldEOT}.eot')`,
    src: `url('${QuicksandSemiBoldEOT}?#iefix') format('embedded-opentype'),
        url('${QuicksandSemiBoldWOFF2}') format('woff2'),
        url('${QuicksandSemiBoldWOFF}') format('woff'),
        url(${QuicksandSemiBoldTTF}) format('ttf')`,
    fontWeight: 600,
    fontStyle: "normal",
    fontDisplay: "swap",
  };
  const quicksandBold = {
    fontFamily: "Quicksand",
    src: `url('${QuicksandBoldEOT}.eot')`,
    src: `url('${QuicksandBoldEOT}?#iefix') format('embedded-opentype'),
        url('${QuicksandBoldWOFF2}') format('woff2'),
        url('${QuicksandBoldWOFF}') format('woff'),
        url(${QuicksandBoldTTF}) format('ttf')`,
    fontWeight: 700,
    fontStyle: "normal",
    fontDisplay: "swap",
  };
  const typography = {
    useNextVariants: true,
    fontFamily: "Quicksand, Arial",
    h1: {
      fontSize: "2.625rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "	1.375rem",
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: 1.4,
    },
    body2: {
      fontSize: "0.8125rem",
    },
    subtitle1: {
      fontSize: "1.0625rem",
      lineHeight: "1.125",
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: "1.125rem",
    },
  };
  const palette = {
    primary: {
      main: primaryColor,
    },
    lightFontColor: "#47484bcf",
  };
  const border = {
    header: "3px solid #000000",
  };
  const theme = createMuiTheme({
    typography,
    palette,
    border,
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [
            quicksandLight,
            quicksandRegular,
            quicksandMedium,
            quicksandSemiBold,
            quicksandBold,
          ],
          ul: {
            marginBlockStart: 0,
            marginBlockEnd: 0,
            marginInlineStart: 0,
            marginInlineEnd: 0,
            paddingInlineStart: 0,
          },
        },
      },
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default Theme;
