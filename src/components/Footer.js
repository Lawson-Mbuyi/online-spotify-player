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
  }, [token, contextUri]);

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
  display: flex;
  justify-content: center;
  width: 100%;
  height: 65px;
  padding: 20px;
  background-color: #282828;
  bottom: 0;
`;
