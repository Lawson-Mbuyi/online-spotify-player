import styled from "styled-components";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { MdHomeFilled } from "react-icons/md";
import Star from "./Star.png";
import Playlist from "./PlayList";

export default function Sidebar() {
  return (
    <Container>
      <img width="100" src={Star} alt="logo" />
      <div className="menu">
        <DehazeIcon />
      </div>

      <div className="sideBarLink">
        <span>Streaming-App</span>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <span>Recents</span>
          </li>
          <li>
            <span>PlayList</span>
          </li>
        </ul>
        <Playlist />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #2f2e41;
  .menu {
    display: none;
  }
  .sideBarLink {
    color: #b3b3b3;
    display: flex;
    flex-flow: row wrap;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  li :hover {
    display: flex;
    gap: 1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    color: white;
  }
  @media screen and (max-width: 700px) {
    .sideBarLink {
      display: none;
    }
    img {
      width: 60px;
      paddind: 5px;
    }
    .menu {
      display: block;
      cursor: pointer;
    }
  }
`;
