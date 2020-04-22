import React from 'react'

import { withTheme, Theme } from '@material-ui/core';
import styled from 'styled-components';

const resetButtonStyle = `
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
  outline: inherit;
`;

const makeBoxShadow = (color : any, hover : Boolean) => (`
  0 0 ${ hover ? 1.5 : 1 }px ${ hover ? 0.3 : 0 }px ${color},
  inset 0 0 ${ hover ? 1.5 : 1 }px 0px ${color}
`);

const makeTextShadow = (color : any, hover : Boolean) => (`
  0 0 ${ hover ? 1.5 : 0.5 }px ${color}
`);

const Border = styled.button`
  box-sizing: border-box;
  ${resetButtonStyle}

  width: 40px;
  height: 40px;
  margin: auto;

  border-radius: 50%;
  border: solid 1px;
  border-color: ${ ({ color }) => color };
  box-shadow: ${ props => makeBoxShadow(props.color, false) };

  :hover {
    box-shadow: ${ props => makeBoxShadow(props.color, true) };

    transition: 0.2s
  }

  display: flex;
  justify-content: center;
  align-content: center;
`;

const Icon = styled.div`
  width: min-content;
  height: 28px;
  line-height: 28px;
  margin-bottom: 2.5px;
  margin-right: 0px;

  font-weight: 300;
  text-align: center;
  vertical-align: middle;

  font-size: 28px;

  color: ${ props => props.color };
  text-shadow: ${ props => makeTextShadow(props.color, false) };
  
  :hover {
    text-shadow: ${ props => makeTextShadow(props.color, true) };
    transition: 0.2s
  }
`;

const FabAdd = ({ className, theme, onClick } : FabProps) => {
  const color = theme?.palette?.primary?.main || 'blue';

  return (
    <Border className={className} color={color} onClick={onClick}>
      <Icon color={color}>+</Icon>
    </Border>
  )
};

interface FabProps {
  className?: string;
  theme?: Theme;
  onClick?: () => any;
}

export default withTheme(FabAdd);