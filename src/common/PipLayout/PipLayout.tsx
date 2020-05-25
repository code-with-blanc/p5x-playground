import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
     ".  .  ."
     ". pip ."
     ".  .  .";

  @media (max-width : 640px) {
    grid-template-columns: 7% 1fr 7%;
    grid-template-rows: 1fr auto 5%;
  }
  @media (min-width : 641px) {
    grid-template-columns: 1fr max(290px, min(40%, 480px)) 24px;
    grid-template-rows: 1fr auto 24px;
  }
`;

const Background = styled.div`
  grid-column: 1 / -1 ;
  grid-row: 1 / -1;

  width: 100%;
  height: 100%;
`;

const PictureInPicture = styled.div`
  grid-area: pip;

  & > .pip-adjust-ratio {
    position: relative;
    height: 0;
    padding-bottom: 56.25%; /* 56.25% = 16:9 ratio */

    & > .pip-fill-height {
      position: absolute;
      top: 0; bottom: 0; left: 0; right: 0;
    }
  }
`;

export const PipLayout : React.FC<Props> = ({
  className, background, pip
}) => {
  return (
    <Container className={className}>
      <Background>
        {background}
      </Background>
      <PictureInPicture>
        <div className="pip-adjust-ratio">
          <div className="pip-fill-height">
          {pip}
          </div>
        </div>
      </PictureInPicture>
    </Container>
  )
}

interface Props {
  className?: string;
  background: React.ReactNode;
  pip: React.ReactNode;
}

export default PipLayout;