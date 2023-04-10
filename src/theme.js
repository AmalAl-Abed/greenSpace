import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//color design pallete

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        secondary: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        grey: {
          100: "#FEFEFE", // White
          200: "#F8F8FA", // background/body color 
          300: "#707070", // overlay and borders color
          400: "#99ABB4", // icons color2
          500: "#7C7D80", // table data color
        
        },
        primary: {
          100: "#C6E4C6",
          300: "#7CC27C",
          400: "#7CC27C",
          500: "#45A845",
          // 400: "#f2f0f0",
          // 500: "#141b2d",
          // 600: "#1F2A40",
          // 700: "#727681",
          // 800: "#a1a4ab",
          // 900: "#d0d1d5",
        },
       secondary: { 
          300: "#5FC5ED", // main
          500: "#309ED9", // 500
          700: "#2E63AB", // success (draft) color
          800: "#5E8495", // icons colors2
          900: "#4E6E7D", // main text
          // 600: "#70d8bd",
          // 700: "#94e2cd",
          // 800: "#b7ebde",
          // 900: "#dbf5ee",
        },
        redAccent: {
          100: "#FFE750",
          300: "#F63845",
          500: "#E62E42",
        },
        yellowAccent: {
          100: "#FFF199",
          300: "#FFE750",
          500: "#FFD12E",
        },
      }),
});



//Mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[300],
              // light: colors.secondary[300],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[300],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#F8F8FA",
            },
          }),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 33,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 28,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 23,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 19,
      },
      base: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
      },
      small: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
      },
      xsmall: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 12,
      },
      xxsmall: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 10,
      },
    },
  };
};



// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
})



// custom hook
export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};