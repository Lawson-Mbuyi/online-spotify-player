import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { GetUserValue } from "../utilities/UserProvider";

export default function Playlists() {
  const [{ token, playlists }, dispatch] = GetUserValue();
  useEffect(() => {
    const getPlaylist = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me/playlists/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const { playlistObjects } = response.data;
      const playlists = playlistObjects.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: "SET_PLAYLISTS", playlists });
    };
    getPlaylist();
  }, [token, dispatch]);
  const changPlaylist = (selectedPlaylistId) => {
    dispatch({ type: "SET_PLAYLIST_ID", selectedPlaylistId });
  };
  return (
    <Container>
      <ul>
        {playlists.map(({ name, id }) => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li key={id} onClick={() => changPlaylist(id)}>
              {name}
            </li>
          );
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
