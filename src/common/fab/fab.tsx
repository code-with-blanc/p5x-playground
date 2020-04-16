import React from 'react'

import styled from 'styled-components';

// .fab {
//   width: 70px;
//   height: 70px;
//   backgroundColor: 'red',
//   borderRadius: '50%',
//   box-shadow: 0 6px 10px 0 #666;
//   transition: all 0.1s ease-in-out;

//   font-size: 50px;
//   color: white;
//   text-align: center;
//   line-height: 70px;

//   position: fixed;
//   right: 50px;
//   bottom: 50px;
// }

interface FabProps {
  className?: string;
}

const Div = styled.div`
    width: 60px;
    height: 60px;
    background-color: blue;

    i {
      font-size: 150%;
      font-weight: 500;

      color: red;
    }
`;

const Fab = ({ className } : FabProps) => {
  return (
    <Div className={className}>
      <i>+</i>
    </Div>
  )
};

export default Fab;