/* eslint-disable camelcase */
import styled from "styled-components";
import Lottie from "react-lottie";
import playing from "./playing.json";
// eslint-disable-next-line import/no-cycle
import Header from "./Header";

export default function Login() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: playing,
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
    ];
    window.location.href = `${api_url}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " ",
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <Header />
      <Content>
        <p>
          Toutes les musiques du monde avec tous les artistes de renommé mondiale c est
          ici avec ONELINE-SPOTIFY-PLAYER
        </p>
        <button type="button" onClick={handleClick}>
          Ouvrir
        </button>
        <Lottie options={defaultOptions} height={400} width={400} />
      </Content>
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  heigth: 100vh;
  background-color: #2f2e41;
`;
const Content = styled.div`
  margin: 60px;
  width: 65%;
  height: 90vh;
  overflow-y: overlay;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(transparent, #4F4C6B);
  background-color: rgb(91, 87, 115);
  gap: 2rem;

  img {
    height: 20vh;
    width: 400px;
  }
  button {
    padding: 1rem 3rem;
    border-radius: 5rem;
    background-color: #5931ba;
    color: #fff;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
  @media screen (and max-width:700px){
    p {
      max-width: 428px;
      min-width: 250px;
      font-size: 16px;
      margin: 15px;
      text-align: center;
    }
  }
  p {
    max-width: 428px;
    heigth: 125px;
    font-size: 20px;
    color white;
    paddind: 5px;
    text-align: center;
  }
`;
