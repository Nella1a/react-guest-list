import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import axios from 'axios';
import { useEffect, useState } from 'react';
import GetNames from './GuestList/GetNames';
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
  const [guestId, setGuestId] = useState('0');

  function removeGuest(deleteID) {
    alert('Hello:');
  }
  const baseUrl = 'http://localhost:4000';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseUrl}/guests`);
      const allGuests = await response.json();
      console.log(allGuests);

      setGuestList(allGuests);
    };
    fetchData().catch(console.error);
  }, []);

  console.log('hello');

  return (
    <>
      <GetNames
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
        removeGuest={removeGuest}
        guestId={setGuestId}
        baseUrl={baseUrl}
        setGuestList={setGuestList}
      />
    </>
  );
}

export default App;
