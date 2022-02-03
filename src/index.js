/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        ::after,
        :before {
          box-sizing: border-box;
        }
        body {
          width: 100%;
          height: 100vh;
          margin: 0;
          background-color: #e0e7f2;
          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 18px;
          font-family: sans-serif;
        }
        h2,
        h3,
        h1 {
          padding: 0;
          margin: 0;
        }
        input[type='text'] {
          width: 18px;
          height: px;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
