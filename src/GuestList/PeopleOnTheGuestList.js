/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

// import RemoveGuestFromGuestList from './RemoveGuestFromGuestList';

// **** This is the component for the guestlist ****

const centerDiv = css``;

const buttonStyle = css`
  color: #fff;
  background-color: #017cff;
  width: 150px;
  height: 50px;
  border-radius: 4px;
  border: none;
  font-size: 17px;
  &:hover {
    /* background-color: #62a7f0; */
    background-color: #0460c2;
  }
`;

const containerGuestList = css`
  /* background-color: #e6edf0; */
  background-color: #ebf0f2;

  display: flex;
  flex-direction: column;
  width: 80vw;
  height: auto;
  justify-content: space-evenly;
  margin: 32px;
  padding: 24px;

  h1 {
    font-weight: 400;
    margin: 32px 30px 32px 20px;
    font-size: 24px;
  }

  p {
    background-color: #fff;
  }
`;

const guestContainer = css`
  display: flex;
  background-color: #fff;
  justify-content: space-around;
  align-items: center;
  margin: 16px;

  span {
    margin-left: 4px;
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
  async function eventHandlerCheckBock(checkBox, guestId) {
    console.log(checkBox);

    if (checkBox) {
      const response = await fetch(`${props.baseUrl}/guests/${guestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attending: true }),
      });
      const updatedGuest = await response.json();
    } else {
      const response = await fetch(`${props.baseUrl}/guests/${guestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attending: false }),
      });
      const updatedGuest = await response.json();
      console.log(updatedGuest);
    }
    const res = await fetch(`${props.baseUrl}/guests`);
    const allGuests = await res.json();

    props.setGuestList(allGuests);
  }

  // const removeGuestFromGuestList = () => {
  //   <RemoveGuestFromGuestList
  //     guestId={props.guestId}
  //     setGuestList={props.setGuestList}
  //     baseUrl={props.baseUrl}
  //   />;
  //   console.log('Hello it works');

  // };

  console.log(typeof props.guestList);

  return (
    <div css={containerGuestList}>
      <h1>Guestlist</h1>
      {props.guestList.map((guest) => (
        <div key={`container_${guest.id}`} css={guestContainer}>
          <p key={guest.firstName}>
            {guest.firstName} {guest.lastName}
          </p>

          <p>
            <input
              aria-label={`${guest.firstName} ${guest.lastName} ${guest.attending}`}
              key={guest.id}
              type="checkbox"
              checked={guest.attending}
              onChange={(event) =>
                eventHandlerCheckBock(event.currentTarget.checked, guest.id)
              }
            />
            {guest.attending ? (
              <span>is attending</span>
            ) : (
              <span>not attending</span>
            )}
          </p>
          <p>
            <button
              onClick={() => eventHandlerDeleteGuest(guest.id)}
              css={buttonStyle}
            >
              Remove
            </button>
          </p>
        </div>
      ))}
      {/* <p>
        <button onClick={removeGuestFromGuestList}>
          Delete attending Guests
        </button>
      </p> */}
    </div>
  );
}
