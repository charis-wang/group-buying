export const themeOption = {
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          height: "100%",
        },
      },
    },
  },
  components: {
    MuiPaper: {
      variants: [
        {
          props: { variant: "background" },
          style: {
            backgroundImage: `url(
              https://res.cloudinary.com/dzufwjonc/image/upload/v1675419632/Group%20Buying/img/ella-olsson-oPBjWBCcAEo-unsplash_ioulr3.jpg
            )`,
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
            width: 4000,
            maxWidth: "100%",
            borderRadius: "4px",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
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
            pr: 2,
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontFamily: "Kaushan Script",
          },
        },
      ],
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
};
