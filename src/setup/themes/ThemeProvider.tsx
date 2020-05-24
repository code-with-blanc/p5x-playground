import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/';
import StylesProvider from '@material-ui/styles/StylesProvider';
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import styledComponentsTheme from './styledComponentsTheme';
import muiTheme from './muiTheme';

const ThemeProvider = (props : any) => {
  return(
    <StyledThemeProvider theme={styledComponentsTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <StylesProvider injectFirst>
          { props.children }
        </StylesProvider>
      </MuiThemeProvider>
    </StyledThemeProvider>
  )
}

export default ThemeProvider;
