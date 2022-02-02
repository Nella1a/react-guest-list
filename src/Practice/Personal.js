/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import Details from './Details';
import Footer from './Footer';

export default function Personal() {
  return (
    <>
      <Details details={['gender', 'marital status', 'weight', 'haircolor']} />
      <Footer />
    </>
  );
}
