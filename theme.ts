// theme.ts

const theme = {
  colors: {
    blue: "#0070f3",
    white: "#ffffff",
    black: "#000000",
    gray: "#e1e1e1",
    red: "#ff0000",
    darkBlue: "#005bb5",
    darkGray: "#c0c0c0",
    darkRed: "#cc0000",
    lightBlue: "#e0f7fa",
    lightGray: "#f5f5f5",
    lightRed: "#fdecea",
  },
  buttons: {
    primary: {
      bg: "blue",
      color: "white",
      padding: "12px 24px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      "&:hover": {
        bg: "darkBlue",
        boxShadow: "0 6px 8px rgba(0, 0, 0, 0.1)",
      },
    },
    secondary: {
      bg: "gray",
      color: "black",
      padding: "12px 24px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      "&:hover": {
        bg: "darkGray",
        boxShadow: "0 6px 8px rgba(0, 0, 0, 0.1)",
      },
    },
    danger: {
      bg: "red",
      color: "white",
      padding: "12px 24px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      "&:hover": {
        bg: "darkRed",
        boxShadow: "0 6px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  cards: {
    solid: {
      bg: "blue",
      color: "white",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: "0 6px 8px rgba(0, 0, 0, 0.1)",
      },
    },
    soft: {
      bg: "lightBlue",
      color: "black",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: "0 6px 8px rgba(0, 0, 0, 0.1)",
      },
    },
    outlined: {
      bg: "white",
      color: "black",
      borderColor: "blue",
      borderWidth: "1px",
      borderStyle: "solid",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: "0 6px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  typography: {
    heading1: {
      fontSize: "32px",
      fontWeight: "bold",
      lineHeight: "1.5",
      marginBottom: "16px",
    },
    heading2: {
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: "1.5",
      marginBottom: "16px",
    },
    heading3: {
      fontSize: "20px",
      fontWeight: "bold",
      lineHeight: "1.5",
      marginBottom: "16px",
    },
    body: {
      fontSize: "16px",
      lineHeight: "1.5",
      marginBottom: "16px",
    },
    caption: {
      fontSize: "14px",
      lineHeight: "1.5",
      marginBottom: "8px",
    },
  },
};

export default theme;
