import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GetUserValue } from "../utilities/UserProvider";

export default function Playlists() {
  const [{ token, playlistId }, dispatch] = GetUserValue();
  const [playlists, setPlaylists] = useState([]);
  const userId = "31awd7pstcisiavoihqcf74ve5lm";
  // eslint-disable-next-line no-template-curly-in-string
  useEffect(() => {
    const getPlaylist = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setPlaylists(response.data.items);
    };
    getPlaylist();
  }, [token, playlistId, dispatch]);

  return (
    <Container>
      <ul>
        {playlists.map(({ name, id }) => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={id}
              onClick={() => {
                dispatch({
                  type: "SET_PLAYLIST_ID",
                  playlistId: id,
                });
              }}
            >
              <Link
                to={`/playlist/${playlistId}`}
                style={{ textDecoration: "none", color: "#b3b3b3" }}
              >
                {name}
              </Link>
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
  Link {
    text-decoration: none;
  }
`;
