// remove guest from the guestlist
export function eventHandlerRemoveGuest(guestId, props) {
  const fetchData = async () => {
    const response = await fetch(`${props.baseUrl}/guests/${guestId}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();

    if (deletedGuest) {
      const copyOfGuestlist = props.guestList.filter(
        (event) => !(event.id === guestId),
      );
      props.setGuestList([...copyOfGuestlist]);
    }
  };

  fetchData().catch(console.error);
}
