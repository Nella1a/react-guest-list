/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import AddGuests from './GuestList/AddGuest';
import PeopleOnTheGuestList from './GuestList/PeopleOnTheGuestList';

const styleButon = css`
  border: 2px solid black;
  background-color: grey;
  width: 150px;
  height: 50px;
  margin: 5px;
`;

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newGuest, setNewGuest] = useState({ guest: {} });
  const [guestList, setGuestList] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const baseUrl = 'http://localhost:4000';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}/guests`);
      const allGuests = await response.json();
      setGuestList(allGuests);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <AddGuests
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        guestList={guestList}
        setGuestList={setGuestList}
        checkBox={isSelected}
        setCheckBox={setIsSelected}
        newGuest={newGuest}
        setNewGuest={setNewGuest}
      />

      <PeopleOnTheGuestList
        guestList={guestList}
        checkBox={isSelected}
        setCheckBox={setIsSelected}
        baseUrl={baseUrl}
        setGuestList={setGuestList}
      />
    </>
  );
}

export default App;
