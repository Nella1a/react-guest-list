/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import TypesOfFruit from '../TypesOfFruits';
import Adress from './address';
import Age from './Age';
import Footer from './Footer';
import Personal from './Personal';

export default function Buttons() {
  const [changeText, setChangeText] = useState(false);
  if (changeText) {
    return (
      <>
        <button onClick={() => setChangeText(false)}>Yes it's true</button>);
        <Footer />
      </>
    );
  } else {
    return <button onClick={() => setChangeText(true)}>its not true</button>;
  }
}
