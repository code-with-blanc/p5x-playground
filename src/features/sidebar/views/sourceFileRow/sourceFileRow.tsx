import React from 'react';
import styled from 'styled-components';

import { SourceFile } from '../../../../services/project/types';

interface SourceFileRowProps {
  sourceFile: SourceFile;
  selected?: boolean;
  onClick?: any;
}

const Container = styled('div')<{selected?: boolean} & React.HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  min-height: 48px;

  color: white;
  cursor: pointer;

  background-color: ${({ selected, theme }) => (
    selected
      ? theme.palette.list.hover
      : theme.palette.list.background
  )};

  :hover {
    background-color: ${(props) => props.theme.palette.list.hover};
  }
`;

const Name = styled.div`
  padding: 6px;
  padding-left: 8px;

  color: white;
  font-size: 1em;
  font-weight: 500;
`;

class SourceFileRow extends React.Component<SourceFileRowProps> {
  renderCount = 0;

  render() {
    this.renderCount += 1;

    return (
      <Container onClick={this.props.onClick} selected={this.props.selected}>
        <Name>{this.props.sourceFile.name}</Name>
      </Container>
    );
  }
}

export default SourceFileRow;
