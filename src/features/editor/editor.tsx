import React, { Component } from 'react'
import styled from 'styled-components';

import CustomSimpleEditor from './customSimpleEditor/CustomSimpleEditor';
import { Sketch } from '../../repository/sketch';

interface EditorProps {
  className?: string;
  count?: number;
  sketch?: Sketch;
  setCode: (id: number, value: string) => void;
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
            console.log(`Should set value: ${value}`)
            // this.props.setCode(this.props.sketch?.id || -1, value) }}
          }}
        />
      </Div>
    )
  }
}

export default Editor;
