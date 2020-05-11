import React, { Component } from 'react'
import styled from 'styled-components';

// import MySimpleEditor from './mySimpleEditor/mySimpleEditor';
import { withSketch, InjectedSketchProps } from '../../repository/sketch/sketchProvider';

interface EditorProps extends InjectedSketchProps {
  className?: string;
  count?: number;
}

const Div = styled.div`
  background-color: ${ props => props.theme.palette.background.default };
`;

class Editor extends Component<EditorProps> {
  props: EditorProps = {
    count: -99,
    sketch: { id: 42, name: '', code: 'init'},
    setCode: () => {},
  }
  
  render() {
    return (
      <Div className={this.props.className}>
        {/* <MySimpleEditor
          value = {this.props?.sketch?.code}
          onValueChange = {(value) => { this.props.setCode(value) }}
        /> */}
      </Div>
    )
  }
}

export default withSketch(Editor);
