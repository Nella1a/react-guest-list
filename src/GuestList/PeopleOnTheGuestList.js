/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { eventHandlerCheckBox } from './EventHandlerCheckBox';
import { eventHandlerRemoveGuest } from './RemoveGuestFromGuestList';

const buttonStyle = css`
  color: #fff;
  background-color: #9bb3cc;

  /* #9bb3cc */
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
  width: 60vw;
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

export default function PeopleOnTheGuestList(props) {
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
                eventHandlerCheckBox(
                  event.currentTarget.checked,
                  guest.id,
                  props,
                )
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
              onClick={() => eventHandlerRemoveGuest(guest.id, props)}
              css={buttonStyle}
            >
              Remove
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}
