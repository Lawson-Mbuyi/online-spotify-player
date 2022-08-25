import axios from "axios";
import styled from "styled-components";
import { GetUserValue } from "../utilities/UserProvider";

export default function Playlists() {
  const [{ token, playlists }, dispatch] = GetUserValue();
  const getPlaylistData = async () => {
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/featured-playlists/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    const { items } = response.data.playlists;
    console.log(items);

    const playlists = items.map(({ name, id }) => {
      return { name, id };
    });
    dispatch({
      type: "SET_PLAYLISTS",
      playlists,
    });
  };
  getPlaylistData();
  return (
    <Container>
      <ul>
        {playlists.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  color: #b3b3b3;
  height: 100%;
  overflow: hidden;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 55vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
    li {
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
`;
