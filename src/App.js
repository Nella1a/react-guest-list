/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { containerAddGuest, styleLoadingPage } from './elements';
import PeopleOnTheGuestList from './GuestList/PeopleOnTheGuestList';

function App() {
  const [firstName, setFirstName] = useState(''); /* Userinput first name*/
  const [lastName, setLastName] = useState(''); /* Userinput last name */
  const [loading, setLoading] = useState(true);
  const [guestList, setGuestList] = useState([
    {},
  ]); /* local copy of guestlist */
  const [checkBox, setCheckBox] = useState(false);
  // const [isSelected, setIsSelected] =
  //   useState(false); /*  local copy of attending status */
  const baseUrl = 'http://localhost:4000';

  // Get Guestlist from server
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`${baseUrl}/guests`);
      const allGuests = await response.json();
      setGuestList(allGuests);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  // add guest to the guestlist by pressing return in the last name field or add guest button
  async function handleKeyDown(event) {
    if (
      (event.key === 'Enter' || event.type === 'click') &&
      firstName &&
      lastName
    ) {
      const response = await fetch(`${baseUrl}/guests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
        }),
      });
      const createdGuest = await response.json();

      // make a local copy of guestlist & added guest
      const copyOfGuestlist = [...guestList, createdGuest];
      setGuestList(copyOfGuestlist);

      // clear both input fields after guest has been created
      if (createdGuest) {
        setLastName('');
        setFirstName('');
      }
    }
  }

  const disabled = loading ? true : false;

  return (
    <div data-test-id="guest">
      {/* {loading ? (
        <div css={styleLoadingPage}>Loading...</div>
      ) : ( */}
      {/* <div> */}
      <section css={containerAddGuest}>
        <h2>Add Guest</h2>
        <article>
          <p>
            <label htmlFor="First name">First Name </label>
            <input
              value={firstName}
              key="01"
              onChange={(event) => setFirstName(event.target.value)}
              disabled={disabled}
            />
          </p>
          <p>
            <label htmlFor="Last name">Last Name </label>
            <input
              value={lastName}
              key="02"
              onChange={(event) => setLastName(event.target.value)}
              onKeyPress={(event) => handleKeyDown(event)}
              disabled={disabled}
            />
          </p>
          <p>
            <button onClick={(click) => handleKeyDown(click)}>Add Guest</button>
          </p>
        </article>
      </section>
      {loading ? (
        (<div css={styleLoadingPage}>Loading...</div>)(setLoading(false))
      ) : (
        <PeopleOnTheGuestList
          guestList={guestList}
          checkBox={checkBox}
          setCheckBox={setCheckBox}
          baseUrl={baseUrl}
          setGuestList={setGuestList}
        />
      )}
    </div>
  );
}

export default App;
