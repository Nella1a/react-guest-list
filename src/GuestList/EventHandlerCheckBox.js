export async function eventHandlerCheckBox(checkBox, guestId, props) {
  // update guest on the server
  const response = await fetch(`${props.baseUrl}/guests/${guestId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ attending: checkBox }),
  });

  const updatedGuest = await response.json();

  // update attending status of guest in local copy of guestlist
  const copyOfGuestList = props.guestList.map((guest) => {
    if (guest.id === updatedGuest.id) {
      return updatedGuest;
    }
    return guest;
  });
  props.setGuestList([...copyOfGuestList]);
}
