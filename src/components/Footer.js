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
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  padding: 20px;
  height: 65px;
  width: 97%;
  background-color: #282828;
`;
