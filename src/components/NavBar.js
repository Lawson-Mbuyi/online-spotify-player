/* eslint-disable react/prop-types */
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { GetUserValue } from "../utilities/UserProvider";

export default function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [artists, setArtists] = useState([]);
  const [{ token, contextUri }, dispatch] = GetUserValue();

  const searchArtists = async (e) => {
    e.preventDefault();
    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchText,
        type: "artist",
      },
    });
    setArtists(response.data.artists.items);
  };
  useEffect(() => {
    searchArtists();
  }, [token, searchText, contextUri, dispatch]);

  const renderArtists = () => {
    return (
      <Data>
        <div className="block">
          {artists ? (
            artists.map((artist) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <ul
                key={artist.id}
                onClick={() => {
                  dispatch({
                    type: "SET_CONTEXT_URI",
                    contextUri: artist.uri,
                  });
                }}
              >
                {artist.images.length ? (
                  <li>
                    <img src={artist.images[0].url} alt="" width={300} />
                  </li>
                ) : null}
                <li>
                  <span>{artist.name}</span>
                </li>
              </ul>
            ))
          ) : (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
        </div>
      </Data>
    );
  };

  const [{ userInfo }] = GetUserValue();
  return (
    <>
      <Container>
        <div className="search__bar">
          <form onSubmit={searchArtists}>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} />
          </form>
        </div>
        <div className="avatar">
          <a href={userInfo?.userUrl}>
            <CgProfile />
            <span>{userInfo?.name.substring(0, 3)}</span>
          </a>
        </div>
      </Container>
      {searchText ? renderArtists() : null}
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 15vh;
  position: sticky;
  top: 0;
  transition: 0.3s ease-in-out;
  background-color: ;
  .search__bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
  .avatar {
    background-color: #4f4c6b;
    padding: 0.3rem 0.4rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: white;
      font-weight: bold;
      svg {
        font-size: 1.3rem;
        background-color: #2f2e41;
        padding: 0.2rem;
        border-radius: 1rem;
        color: #c7c5c5;
      }
    }
  }
`;
const Data = styled.div`
  .block {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    cursor: pointer;
  }
  .block ul {
    list-style-type: none;
    font-size: larger;
    color: #ffffff;
  }
`;
