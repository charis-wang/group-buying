import { createTheme } from "@mui/material";

const darkPrimaryColor = "#000";
const darkSecondaryColor = "#545342";
const darkTextColor = "#7A8463";

const lightPrimaryColor = "#ECD7A9";
const lightSecondaryColor = "#C8B592";
const lightTextColor = "#8d6e63";

export const themeOption = (mode) => createTheme({
  palette: {
    mode: mode,     
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: "100%",
          backgroundColor: mode === "dark" ? darkPrimaryColor : lightPrimaryColor, 
        },
        '@keyframes moveRight': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(10px)' },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === "dark" ? darkSecondaryColor : lightSecondaryColor,
          boxShadow: "none",
        },
      },
    },

    MuiPaper: {
      variants: [
        {
          props: { variant: "background" },
          style: {
            backgroundImage: `url(https://res.cloudinary.com/dzufwjonc/image/upload/v1675419632/Group%20Buying/img/ella-olsson-oPBjWBCcAEo-unsplash_ioulr3.jpg)`,
            backgroundColor: "white",
            height: "35vh",
            backgroundOrigin: "border-box",
            backgroundPosition: "50% 30%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          },
        },
        {
          props: { variant: "menu" },
          style: {
            width: "4000px",
            maxWidth: "100%",
            borderRadius: "4px",
            boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
          },
        },
      ],
    },

    MuiFab: {
      variants: [
        {
          props: { variant: "edit" },
          style: {
            position: "fixed",
            bottom: "2%",
            right: "2.5%",
            backgroundColor: "#d7ccc8",
            "&:hover": {
              backgroundColor: "#8d6e63",
              color: "#fff",
            },
          },
        },
      ],
    },

    MuiTypography: {
      variants: [
        {
          props: { variant: "groupName" },
          style: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "rgb(103, 131, 104)",
            paddingRight: "8px",
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontFamily: "Kaushan Script",
          },
        },
        {
          props: { variant: "body1" },
          style: {
            "&:hover": {
              color: mode === "dark" ? darkTextColor : lightTextColor,
              fontWeight: "bold",
            },
          },
        },
        {
          props: { variant: "sidebar" },
          style: {
            "&:hover": {
              color: mode === "dark" ? darkTextColor : lightTextColor,
              fontWeight: "bold",
              animation: "moveRight .1s ease-in-out forwards",
            },
            "&:hover::before": {
              content: '"\\2794"',  // Unicode 右箭頭
              fontFamily: "Material Icons", 
              marginRight: "8px",
              opacity: 1, 
            },
          },
        },
      ],
    },

    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: mode === "dark" ? darkTextColor : lightTextColor,
            fontWeight: "bold",
            "& .MuiTypography-root": {
              fontWeight: "bold",
            },
          },
        },
      },
    },

    MuiMenuList: {
      variants: [
        {
          props: { variant: "menu" },
          style: {},
        },
      ],
    },
  },
});
