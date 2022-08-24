import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
// import Lottie from "react-lottie";
// import spotify from "./spotify.json";
import Star from "./Star.png";
import Playlist from "./PlayList";

export default function Sidebar() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: spotify,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <Container>
      <div className="top__links">
        <img src={Star} alt="logo" />
        <div className="logo">
          {/* <Lottie options={defaultOptions} height={200} max-width={190} /> */}
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Recherche</span>
          </li>
          <li>
            <span>Bibliothèque</span>
          </li>
        </ul>
      </div>
      <Playlist />
    </Container>
  );
}

const Container = styled.div`
  background-color: #2f2e41;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      img {
        max-inline-size: 20%;
        block-size: auto;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
`;
