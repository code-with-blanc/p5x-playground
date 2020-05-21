import React from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import {} from 'styled-components';

import styledComponentsTheme from './styledComponentsTheme';
import muiTheme from './muiTheme';

declare module 'styled-components' {
  type Theme = typeof styledComponentsTheme;
  export interface DefaultTheme extends Theme {}
}

const ThemeProvider = (props : any) => {
  return(
    <StyledThemeProvider theme={styledComponentsTheme}>
      <MuiThemeProvider theme={muiTheme}>
        { props.children }
      </MuiThemeProvider>
    </StyledThemeProvider>
  )
}

export default ThemeProvider;
