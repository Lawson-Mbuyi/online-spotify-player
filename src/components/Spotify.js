/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import SideBar from "./SideBar";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { GetUserValue } from "../utilities/UserProvider";
import Main from "./Main";

export default function Spotify() {
  const [{ token }, dispatch] = GetUserValue();
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        userUrl: data.external_urls.spotify,
        name: data.display_name,
      };
      dispatch({
        type: "SET_USER",
        userInfo,
      });
    };
    getUserInfo();
  }, [dispatch, token]);

  return (
    <Container>
      <div className="body_content">
        <SideBar />
        <div className="body">
          <NavBar />
          <div className="body__contents">
            <Main />
          </div>
        </div>
      </div>
      <div className="footer_content">
        <Footer />
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .body_content {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: #4f4c6b;
    .body {
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
        }
      }
    }
  }
`;
