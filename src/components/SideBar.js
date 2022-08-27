import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Star from "./Star.png";
import Playlist from "./PlayList";

export default function Sidebar() {
  return (
    <Container>
      <div className="top__links">
        <img width="100" src={Star} alt="logo" />
        <span>Music-Streaming-App</span>
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
