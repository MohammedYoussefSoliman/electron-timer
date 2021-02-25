import React, {FC} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import 'typeface-poppins';

const theme = createMuiTheme({  
  typography: {
    fontFamily: 
      '"Poppins", sans-serif',
  },
  overrides: {
    MuiInput: {
      input: {
        "&::placeholder": {
          fontSize: "0.75em",
          fontWeight: "400",
          color: "#999cad"
        },
        
      }
    }
  }
});

type childProp = {
    children: React.ReactNode
}

const AppTheme:FC<childProp> = ({children}) => {

    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    )
}

export default AppTheme