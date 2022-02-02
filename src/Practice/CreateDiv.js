/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const styleDiv = css`
  width: 100px;
  height: 100px;
  background: #f0f;
  margin-top: 5px;
`;
export default function CreateDiv() {
  return <div css={styleDiv}>Hello</div>;
}
