import React, { Component } from 'react'
import styled from 'styled-components';
import ReactSimpleCodeEditor from 'react-simple-code-editor';

import { Sketch } from '../../repository/sketch';
import highlight from './highlight';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import './prism.css';

interface EditorProps {
  className?: string,
  sketch?: Sketch,
  getSketches: Function,
}

const Div = styled.div`
  background-color: ${ props => props.theme.palette.background.default };
`;

export class Editor extends Component {
  props: EditorProps;
  state = {
    code: "",
  };

  constructor(props : EditorProps) {
    super(props);
    this.props = props;
    this.state = {
      code: props?.sketch?.code || "// No sketch selected\n",
    };

    props.getSketches();
  }

  render() {
    return (
      <Div className={this.props.className}>
        <ReactSimpleCodeEditor
          value={this.state.code}
          onValueChange={code => this.setState({ ...this.state, code })}
          highlight={highlight}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            color: 'white',
            width: '100%',
            height: '100%',
          }}
        />
      </Div>
    )
  }
}

export default Editor;
