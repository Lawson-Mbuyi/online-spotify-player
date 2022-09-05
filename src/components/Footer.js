import { useEffect } from "react";
import styled from "styled-components";
import SpotifyPlayer from "react-spotify-web-playback";
import { GetUserValue } from "../utilities/UserProvider";

export default function Footer() {
  const [{ token, contextUri }, dispatch] = GetUserValue();
  useEffect(() => {
    dispatch({
      type: "SET_CONTEXT_URI",
      contextUri,
    });
  }, [token, contextUri, dispatch]);

  return (
    <Container>
      <header className="player">
        <SpotifyPlayer
          token={token}
          uris={[`${contextUri}`]}
          styles={{
            activeColor: "#fff",
            bgColor: "#333",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#1cb954",
            trackArtistColor: "#ccc",
            trackNameColor: "#fff",
          }}
        />
      </header>
    </Container>
  );
}

const Container = styled.div`
  position: fix;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75px;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0.5, 0.4, 0.5, 1));
  background-color: #2f2e41;
`;
