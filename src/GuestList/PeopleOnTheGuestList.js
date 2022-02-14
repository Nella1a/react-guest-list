/** @jsxImportSource @emotion/react */

import { containerGuestList } from '../elements';
import { eventHandlerCheckBox } from './EventHandlerCheckBox';
import { eventHandlerRemoveGuest } from './RemoveGuestFromGuestList';

export default function PeopleOnTheGuestList(props) {
  return (
    <div css={containerGuestList} data-test-id="guest">
      <h1>Guest List {props.guestList.length === 0 && ' - no guests'}</h1>
      {props.guestList.map((guest) => (
        <article key={`container_${guest.id}`}>
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
              aria-label="Remove"
            >
              Remove
            </button>
          </p>
        </article>
      ))}
    </div>
  );
}
