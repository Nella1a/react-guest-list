/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const containerAddGuest = css`
  background-color: #ebf0f2;

  display: flex;
  flex-direction: column;
  width: 60vw;
  /* gap: 32px; */
  height: auto;
  align-items: center;
  margin: 32px;
  padding: 24px 48px;

  h2 {
    width: 100%;
    font-weight: 400;
    margin: 32px 30px 32px 20px;
    font-size: 24px;
    text-align: left;
  }

  input {
    width: 192px;
    height: 48px;
    border: none;
    padding: 8px;
    font-size: 18px;
  }
`;

const styleLabel = css`
  :after {
    content: '';
    display: block;
    margin-bottom: 8px;
  }
`;

const styleArticle = css`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  gap: 120px;
`;

const buttonStyle = css`
  color: #fff;
  background-color: #017cff;
  width: 150px;
  height: 50px;
  border-radius: 4px;
  border: none;
  font-size: 17px;
  margin-top: 19%;
  &:hover {
    /* background-color: #62a7f0; */
    background-color: #0460c2;
  }
`;

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
      <article css={styleArticle}>
        <p>
          <label htmlFor="First name" css={styleLabel}>
            First Name{' '}
          </label>
          <input
            value={props.firstName}
            key="01"
            onChange={(event) => props.setFirstName(event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="Last name" css={styleLabel}>
            Last Name{' '}
          </label>
          <input
            value={props.lastName}
            key="02"
            onChange={(event) => props.setLastName(event.target.value)}
            onKeyPress={(event) => handleKeyDown(event)}
          />
        </p>
        <p>
          <button onClick={handleKeyDown} css={buttonStyle}>
            Add Guest
          </button>
        </p>
      </article>
    </section>
  );
}
