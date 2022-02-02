/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

// **** This is the component for the guestlist ****

const styleUl = css`
  ul {
    list-style: none;
    display: flex;
  }

  li {
    background-color: lightgray;
    margin: 5px 5px;
    list-style: none;
  }
`;

// function List(props) {
//   return <ul css={styleUl}>{props.children}</ul>;
// }

export default function PeopleOnTheGuestList(props) {
  // useEffect(() => {
  function eventHandlerDeleteGuest(guestId) {
    const fetchData = async () => {
      const response = await fetch(`${props.baseUrl}/guests/${guestId}`, {
        method: 'DELETE',
      });
      const deletedGuest = await response.json();

      if (deletedGuest) {
        const res = await fetch(`${props.baseUrl}/guests`);
        const allGuests = await res.json();
        console.log(allGuests);
        props.setGuestList(allGuests);
      }

      console.log('delte:', deletedGuest);
      console.log('Guestlist before:', props.guestList);
      console.log('Guestlist after:', props.guestList);
    };

    fetchData().catch(console.error);
  }

  console.log(typeof props.guestList);

  return (
    <>
      {props.guestList.map((guest) => (
        <div
          key={`container_${guest.id}`}
          style={{
            display: 'flex',
            justifyConten: 'flex-start',
            alignContent: 'flex-start',
          }}
        >
          <p key={guest.id}>
            {guest.firstName} {guest.lastName}
          </p>

          <p>
            <input
              key={guest.id}
              type="checkbox"
              // checked={props.isSelected}
              // onChange={() => toggleComplete(guest, index)}
              // onChange={() => guest.setIsSelected((e) => console.log(!e.isSelected))}
            />
          </p>
          <p>
            <button onClick={() => eventHandlerDeleteGuest(guest.id)}>
              button
            </button>
          </p>
        </div>
      ))}
    </>
  );
}
