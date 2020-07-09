import React from 'react';
import styled from 'styled-components';

export interface StateProps {
  isError: boolean;
  isBuilding: boolean;
}

const BuildIndicator : React.FC<StateProps> = ({ isError, isBuilding }) => {
  return (
    <Div>
      {
        (isError) ? (
          <span className="build-indicator--error">Build Error</span>
        ) : null
      }
      {
        (isBuilding && !isError) ? (
          <span className="build-indicator--building"> Building...</span>
        ) : null
      }
    </Div>
  );
};

const Div = styled.div`
  padding: 8px;
  margin-right: 16px;

  & .build-indicator {
    &--building {
      color: rgba(255, 255, 255, 0.8);
    }

    &--error {
      color: #d84315;
    }
  }
`;

export default BuildIndicator;
