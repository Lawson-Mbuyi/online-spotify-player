import { useState } from "react";
import styled from "styled-components";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { MdHomeFilled } from "react-icons/md";
import Star from "./Star.png";
import Playlist from "./PlayList";

export default function Sidebar() {
  const [isHidden, setIsHidden] = useState(false);
  const hideHandler = () => {
    setIsHidden(!isHidden);
  };
  return (
    <Container>
      <img width="100" src={Star} alt="logo" />
      <DehazeIcon
        className="menu"
        onClick={() => {
          hideHandler();
        }}
      />
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
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  li :hover {
    gap: 1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    color: white;
  }
  @media screen and (max-width: 700px) {
    .sideBarLink {
      display: ${({ isHidden }) => (isHidden ? "block" : "none")};
    }
    img {
      width: 60px;
      paddind: 5px;
      margin: auto;
    }
    .menu {
      display: block;
      cursor: pointer;
      padding: 15px;
    }
  }
`;
