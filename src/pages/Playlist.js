import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { GetUserValue } from "../utilities/UserProvider";

export default function Playlist() {
  const [{ token, selectedPlaylist, playlistId, contextUri }, dispatch] = GetUserValue();

  useEffect(() => {
    const GetPlayListTracks = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description,
        image: response.data.images[1].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duree: track.duration_ms,
          album: track.album.name,
          contextUri: track.album.uri,
          trackNumber: track.trackNumber,
        })),
      };
      dispatch({
        type: "SET_PLAYLIST",
        selectedPlaylist,
      });
    };

    GetPlayListTracks();
  }, [token, playlistId, contextUri, dispatch]);
  function ConvertToTime(trackTime) {
    const minutes = Math.floor(trackTime / 60000);
    const seconds = ((trackTime % 60000) / 1000).toFixed(0);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  return (
    <Container>
      <div className="body-content">
        <SideBar />
        {selectedPlaylist && (
          <div>
            <NavBar />
            <div className="playlistItems">
              <div className="image">
                <img src={selectedPlaylist.image} alt="playlistItems Avatar" />
              </div>
              <div className="details">
                <span className="type">PLAYLIST</span>
                <h1 className="title">{selectedPlaylist.name}</h1>
                <p className="description">{selectedPlaylist.description}</p>
              </div>
            </div>
            <div className="list">
              <div className="header-row">
                <div className="label">
                  <span>N°</span>
                </div>
                <div className="label">
                  <span>TITRE</span>
                </div>
                <div className="label">
                  <span>ALBUM</span>
                </div>
                <div className="label">
                  <span>DUREE </span>
                </div>
              </div>
              <div className="tracks">
                {selectedPlaylist.tracks.map(
                  ({ id, name, artists, image, duree, album }, index) => {
                    return (
                      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                      <div
                        className="row"
                        key={id}
                        onClick={() => {
                          dispatch({
                            type: "SET_CONTEXT_URI",
                            contextUri,
                          });
                        }}
                      >
                        <div className="label">
                          <span>{index + 1}</span>
                        </div>
                        <div className="label detail">
                          <div className="image">
                            <img src={image} alt="thundmail" />
                          </div>
                          <div className="info">
                            <span className="name">{name}</span>
                            <span>{artists}</span>
                          </div>
                        </div>
                        <div className="label">
                          <span>{album}</span>
                        </div>
                        <div className="label">
                          <span>{ConvertToTime(duree)}</span>
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  .body-content {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 16vw 84vw;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: #4f4c6b;
  }
  .playlistItems {
    margin: 0 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    .image {
      img {
        height: 15rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      }
    }
    .details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #e0dede;
      .title {
        color: white;
        font-size: 4rem;
      }
    }
  }
  .list {
    .header-row {
      display: grid;
      grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
      margin: 1rem 0 0 0;
      color: #dddcdc;
      position: sticky;
      top: 15vh;
      padding: 1rem 3rem;
      transition: 0.3s ease-in-out;
    }
    .tracks {
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;
      .row {
        padding: 0.5rem 1rem;
        display: grid;
        grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;
        &:hover {
          background-color: #4f4c6b;
          cursor: pointer;
        }
        .label {
          display: flex;
          align-items: center;
          color: #dddcdc;
          img {
            height: 40px;
            width: 40px;
          }
        }
        .detail {
          display: flex;
          gap: 1rem;
          .info {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`;
