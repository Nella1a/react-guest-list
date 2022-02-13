/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import Age from './Age';
import Personal from './Personal';

// import TypesOfFruit from './TypesOfFruits';

const styleA = css`
  border: 2px solid black;
  background-color: grey;
  width: 350px;
  height: auto; ;
`;

export default function Form() {
  return (
    <div css={styleA}>
      <h1>Form</h1>
      {/* <Buttons /> */}
      <h2>Age</h2>
      <Age age={20} />
      <h2>Adress</h2>
      {/* <Adress /> */}
      <h2>Personal Details</h2>
      <Personal />
    </div>
  );
}
