import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Spotify from "../components/Spotify";
import { GetUserValue } from "../utilities/UserProvider";
import PlayList from "./Playlist";

export default function App() {
  const [{ token }, dispatch] = GetUserValue();
  useEffect(() => {
    const h = window.location.hash;
    if (h) {
      const token = h.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: "SET_TOKEN", token });
      }
    }
    document.title = "Streaming-App";
  }, [dispatch, token]);

  return (
    <Router>
      <Routes>
        {token ? (
          <Route path="/callback/*" element={<Spotify />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}{" "}
        <Route path="/playlist/:playlistId" element={<PlayList />} />
      </Routes>
    </Router>
  );
}
