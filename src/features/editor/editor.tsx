import React, { Component } from 'react'
import styled from 'styled-components';

import CustomSimpleEditor from './customSimpleEditor/CustomSimpleEditor';
import { Sketch } from '../../repository/sketch';

interface EditorProps {
  className?: string;
  count?: number;
  sketch?: Sketch;
  updateCode: (id: number, value: string) => void;
}

const Div = styled.div`
  background-color: ${ props => props.theme.palette.background.default };
  height: 100%;
  overflow-y: auto;
`;

class Editor extends Component<EditorProps> {
  render() {
    return (
      <Div className={this.props.className}>
        <CustomSimpleEditor
          value = {this.props?.sketch?.code}
          onValueChange = {(value) => {
            let id = this.props.sketch?.id;
            if(id) {
              this.props.updateCode(id, value);
            }
          }}
        />
      </Div>
    )
  }
}

export default Editor;
