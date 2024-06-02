// theme.ts

const theme = {
    colors: {
      blue: '#0070f3',
      white: '#ffffff',
      black: '#000000',
      gray: '#e1e1e1',
      red: '#ff0000',
      darkBlue: '#005bb5',
      darkGray: '#c0c0c0',
      darkRed: '#cc0000',
    },
    buttons: {
      primary: {
        bg: 'blue',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          bg: 'darkBlue',
          boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
        },
      },
      secondary: {
        bg: 'gray',
        color: 'black',
        padding: '12px 24px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          bg: 'darkGray',
          boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
        },
      },
      danger: {
        bg: 'red',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          bg: 'darkRed',
          boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };
  
  export default theme;
  