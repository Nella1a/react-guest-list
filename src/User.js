import { css, useTheme } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import UserList from './GuestListOutput';

function List({ children }) {
  return (
    <>
      <ul style={{ backgroundColor: 'green', width: '300px' }}>{children}</ul>;
    </>
  );
}

export default function User(props) {
  return (
    <List>
      Name: {props.first} {props.last}
      <UserList name={props.first} />
    </List>
  );
}
