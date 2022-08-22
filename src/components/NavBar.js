/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { GetUserValue } from "../utilities/UserProvider";

export default function Navbar({ navBackground }) {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [{ token }, dispatch] = GetUserValue();

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    setArtists(data.artists.items);
  };

  useEffect(() => {
    dispatch({
      type: "SET_TOKEN",
      token,
    });
  }, [token, dispatch]);

  useEffect(() => {
    searchArtists();
  }, [searchKey]);

  const renderArtists = () => {
    return artists.map((artist) => (
      <Data>
        <div key={artist.id}>
          {artist.images.length ? (
            <img width="20%" src={artist.images[0].url} alt="" />
          ) : (
            <div>Pas d infos pour votre requette</div>
          )}
          <span>{artist.name}</span>
        </div>
      </Data>
    ));
  };

  const [{ userInfo }] = GetUserValue();
  return (
    <>
      <Container navBackground={navBackground}>
        <div className="search__bar">
          <form onSubmit={searchArtists}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />

            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="avatar">
          <a href={userInfo?.userUrl}>
            <CgProfile />
            <span>{userInfo?.name}</span>
          </a>
        </div>
      </Container>
      {searchKey ? renderArtists() : null}
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
  background-color: ${({ navBackground }) =>
    navBackground ? "rgba(0,0,0,0.7)" : "none"};
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
    background-color: black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
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
        background-color: #282828;
        padding: 0.2rem;
        border-radius: 1rem;
        color: #c7c5c5;
      }
    }
  }
  .artists {
    display
  }
  button {
    width: 6Opx;
    display: inline-block;
    float: rigth;
  }
`;
const Data = styled.p`
  display: inline-flex;
  width: 500 em;
`;
