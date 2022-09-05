/* eslint-disable camelcase */
import styled from "styled-components";
import Lottie from "react-lottie";
import music_gal from "./music_gal.json";
// eslint-disable-next-line import/no-cycle
import Header from "./Header";

export default function Login() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: music_gal,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClick = async () => {
    const client_id = "ae8b66ff18714363903cfa63fbe6bce6";
    const redirect_uri = "http://localhost:3000/callback/";
    // const client_id = "4b4f1a9eeaf24cd688bf9fb8ce98411e";
    // const redirect_uri = "https://online-spotify-player.vercel.app/callback/";
    const api_url = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
      "playlist-read-collaborative",
      "playlist-modify-public",
      "playlist-read-private",
      "playlist-modify-private",
    ];
    window.location.href = `${api_url}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " ",
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <Header />
      <header>
        <p>
          Toutes les musiques du monde avec tous les artistes de renommé mondiale c est ici avec
          Strimming-App
        </p>
        <button type="button" onClick={handleClick}>
          Je me connecte
        </button>
        <Lottie options={defaultOptions} height={400} max-width={400} />
      </header>
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  heigth: 100vh;
  margin: auto;
  background-color: #2f2e41;

  header {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #4f4c6b;
  }

  button {
    padding: 1rem 2rem;
    border-radius: 5rem;
    background-color: #5931ba;
    color: #fff;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
  @media screen (and max-width: 700px) {
    p {
      max-width: 428px;
      min-width: 250px;
      font-size: 14px;
      margin-top: 25px;
      padding: 15px;
      text-align: center;
    }
    header {
      width: 100%;
    }
  }
  p {
    max-width: 550px;
    font-size: 25px;
    color: #ffffff;
    paddind: 5px;
    text-align: center;
  }
`;
