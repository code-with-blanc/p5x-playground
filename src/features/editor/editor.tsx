import React, { Component } from 'react'
import styled from 'styled-components';

import CustomSimpleEditor from './customSimpleEditor/CustomSimpleEditor';
import { withSketch, InjectedSketchProps } from '../../repository/sketch/sketchProvider';

interface EditorProps extends InjectedSketchProps {
  className?: string;
  count?: number;
}

const Div = styled.div`
  background-color: ${ props => props.theme.palette.background.default };
`;

class Editor extends Component<EditorProps> {
  render() {
    return (
      <Div className={this.props.className}>
        <CustomSimpleEditor
          value = {this.props?.sketch?.code}
          onValueChange = {(value) => { 
            console.log(`will set value: ${value}`)
            this.props.setCode(value) }}
        />
      </Div>
    )
  }
}

export default withSketch(Editor);
