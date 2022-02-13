import defaultProps from 'prop-types';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default function Adress(props) {
  return (
    <div>
      <ul>
        <li>Straße: {props.address.Straße}</li>
        <li>PLZ: {props.address.Postleitzahl}</li>
        <li>Stadt: {props.address.Stadt}</li>
        <li>Land: {props.address.Land}</li>
      </ul>
    </div>
  );
}

Adress.defaultProps = {
  Straße: 'Hello',
  Postleitzahl: 'Hello',
  Stadt: 'Hello',
  Land: 'Hello',
};
