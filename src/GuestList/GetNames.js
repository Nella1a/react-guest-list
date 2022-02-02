/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

export default function GetNames(props) {
  const baseUrl = 'http://localhost:4000';

  async function handleKeyDown(event) {
    if (event.key === 'Enter' && props.firstName && props.lastName) {
      const response = await fetch(`${baseUrl}/guests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: `guest_${props.lastName}`,
          firstName: props.firstName,
          lastName: props.lastName,
        }),
      });
      const createdGuest = await response.json();

      console.log(props.newGuest);
      if (createdGuest) {
        props.setLastName('');
        props.setFirstName('');
        const res = await fetch(`${baseUrl}/guests`);
        const allGuests = await res.json();
        console.log(allGuests);
        props.setGuestList(allGuests);
      }
    } else {
      console.log('no guest added to the api');
    }
  }

  return (
    <>
      <label htmlFor="First name">First Name: </label>
      <input
        value={props.firstName}
        key="01"
        onChange={(event) => props.setFirstName(event.target.value)}
      />
      <label htmlFor="Last name">Last Name: </label>
      <input
        value={props.lastName}
        key="02"
        onChange={(event) => props.setLastName(event.target.value)}
        onKeyPress={(event) => handleKeyDown(event)}
      />
    </>
  );
}
