/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import PropTypes, { func } from 'prop-types';

export default function Details(props) {
  return (
    <div>
      {props.details.map((detail) => {
        return <p key={detail + 1}>{detail}</p>;
      })}
    </div>
  );
}

Details.propTypes = {
  // You can declare that a prop is a specific JS type. By default, these
  // are all optional.
  details: PropTypes.array,
};
