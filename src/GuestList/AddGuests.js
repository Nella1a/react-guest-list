/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import { containerAddGuest } from '../elements';

export default function GetNames(props) {
  // creat guest upon pressing return in the last name field & if input fields are not empty
  async function handleKeyDown(event) {
    if (event.key === 'Enter' && props.firstName && props.lastName) {
      const response = await fetch(`${props.baseUrl}/guests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: props.firstName,
          lastName: props.lastName,
          // attending: props.checkBox,
        }),
      });
      const createdGuest = await response.json();

      // make a local copy of guestlist & added guest
      const copyOfGuestlist = [...props.guestList, createdGuest];
      props.setGuestList(copyOfGuestlist);

      // clear both input fields after guest has been created
      if (createdGuest) {
        props.setLastName('');
        props.setFirstName('');
      }
    }
  }

  return (
    <section css={containerAddGuest}>
      <h2>Add Guest</h2>
      <article>
        <p>
          <label htmlFor="First name">First Name </label>
          <input
            value={props.firstName}
            key="01"
            onChange={(event) => props.setFirstName(event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="Last name">Last Name </label>
          <input
            value={props.lastName}
            key="02"
            onChange={(event) => props.setLastName(event.target.value)}
            onKeyPress={(event) => handleKeyDown(event)}
          />
        </p>
        <p>
          <button onClick={handleKeyDown}>Add Guest</button>
        </p>
      </article>
    </section>
  );
}
