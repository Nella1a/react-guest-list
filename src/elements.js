/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/* *************************** */
/*    reusable styles          */
/* *************************** */
const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const flexAxisAlignment = (mainAxis, crossAxis) => {
  return {
    display: 'flex',
    justifyContent: mainAxis,
    alignItems: crossAxis,
  };
};

const size = (width = '100%', height = '100%') => {
  return { width, height };
};

/* *************************** */
/*    Global Styles            */
/* *************************** */

export const globalStyle = css`
  /* Reset sizing   */
  *,
  ::after,
  :before {
    box-sizing: border-box;
  }

  /* Reset margin */
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  /* body setup  */
  body {
    ${size('100%')}
    margin: 0;
    background-color: #0e52ad;
    line-height: 1.5; /* default for browser: 1.4 tends to be very small*/
    ${flexCenter}
    font-size: 17px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* form elements should have same font as body */
  input {
    font: inherit;
    color: grey;
  }

  /* general button style */
  button {
    ${size('8.82rem', '2.94rem')}
    border-radius: 0.23rem;
    border: none;
    font-size: inherit;
  }
`;

/* *************************** */
/*        index.js         */
/* *************************** */

export const styleLoadingPage = css`
  ${size()}
`;

/* *************************** */
/*        AddGuests.js         */
/* *************************** */

export const containerAddGuest = css`
  background-color: #ebf0f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  height: auto;
  margin: 1.88rem;
  padding: 1.41rem 2.82rem;

  h2 {
    width: 100%;
    font-weight: 400;
    margin: 1.88rem 1.76rem 1.88rem 1.17rem;
    font-size: 1.41rem;
    text-align: left;
  }

  article {
    width: 100%;
    ${flexAxisAlignment('space-around', 'center')}
    padding: 0.94rem;
    label {
      :after {
        content: '';
        display: block;
        margin-bottom: 0.47rem;
      }
    }

    @media screen and (max-width: 1050px) {
      flex-direction: column;
      gap: 1rem;
    }
    input {
      ${size('10.52rem', '2.84rem')}
      border: none;
      padding: 0.47rem;
      font-size: 1.05rem;
    }

    button {
      color: #fff;
      background-color: #017cff;
      margin-top: 20%;
      &:hover {
        background-color: #0460c2;
      }
    }
  }
`;

/* *************************** */
/*   PeopleOnTheGuestList.js   */
/* *************************** */

export const containerGuestList = css`
  background-color: #ebf0f2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${size('60vw', 'auto')}
  margin: 1.88rem;
  padding: 1.41rem;

  h1 {
    font-weight: 400;
    margin: 1.88rem 1.76rem 1.88rem 1.17rem;
    font-size: 1.41rem;
  }

  p {
    background-color: #fff;
  }

  article {
    ${flexAxisAlignment('space-around', 'center')}
    background-color: #fff;
    padding: 0.94rem;
    margin: 0.47rem;

    @media screen and (max-width: 1050px) {
      flex-direction: column;
      gap: 1rem;
    }

    span {
      margin-left: 0.23rem;
    }
  }

  button {
    color: #fff;
    background-color: #9bb3cc;
    &:hover {
      background-color: #0460c2;
    }
  }
`;
