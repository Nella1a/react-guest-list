/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

const styleB = css`
  border: 2px solid blue;
  background-color: green;
  width: 300px;
  height: 350px;
  margin: 0;
  height: auto; ;
`;

export default function Footer() {
  return <div css={styleB}>Footer</div>;
}
