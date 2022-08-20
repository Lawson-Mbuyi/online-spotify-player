import { useEffect } from "react";

import Login from "../components/Login";
import Spotify from "../components/Spotify";
import { GetUserValue } from "../utilities/UserProvider";

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
    document.title = "Online Spotify Player";
  }, [dispatch, token]);
  return <div>{token ? <Spotify /> : <Login />}</div>;
}
