/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import AddGuests from './GuestList/AddGuests';
import PeopleOnTheGuestList from './GuestList/PeopleOnTheGuestList';

function App() {
  const [firstName, setFirstName] = useState(''); // Userinput first name
  const [lastName, setLastName] = useState(''); // Userinput last name
  const [loading, setLoading] = useState(true); //
  const [guestList, setGuestList] = useState([{}]); // local copy of guestlist
  const [checkBox, setCheckBox] = useState(false);
  const [isSelected, setIsSelected] = useState(false); // local copy of attending status
  const baseUrl = 'http://localhost:4000';

  const styleLoadingPage = css`
    width: 100%;
    height: 100%;
  `;

  // Fetch Guestlist from server
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}/guests`);
      const allGuests = await response.json();
      setGuestList(allGuests);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);
  console.log('Checkbox Set:', checkBox);
  console.log('GuestList:', guestList);
  return (
    <div data-test-id="guest">
      {loading ? (
        <div css={styleLoadingPage}>is loading</div>
      ) : (
        <div>
          <AddGuests
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            baseUrl={baseUrl}
            guestList={guestList}
            setGuestList={setGuestList}
            checkBox={isSelected}
            setCheckBox={setIsSelected}
          />

          <PeopleOnTheGuestList
            guestList={guestList}
            checkBox={checkBox}
            setCheckBox={setCheckBox}
            baseUrl={baseUrl}
            setGuestList={setGuestList}
          />
        </div>
      )}
    </div>
  );
}

export default App;
