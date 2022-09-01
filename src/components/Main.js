import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useEffect, useState } from "react";
import { GetUserValue } from "../utilities/UserProvider";
import "../pages/styles/Body.css";

export default function Main() {
  const [{ token, contextUri }, dispatch] = GetUserValue();
  const [releases, setReleases] = useState("");

  useEffect(() => {
    const GetTopReleases = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/browse/new-releases`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const newReleases = {
        tracks: response.data.albums.items,

        artists: response.data.albums.items.map((artist) => ({
          id: artist.id,
          name: artist.name,
        })),
      };
      setReleases(newReleases);
    };
    GetTopReleases();
  }, [token, contextUri, dispatch]);

  return (
    <div className="main-content">
      {releases ? (
        releases.tracks.map((track) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <ul
            key={track.id}
            onClick={() => {
              dispatch({
                type: "SET_CONTEXT_URI",
                contextUri: track.uri,
              });
            }}
          >
            <li>
              <img src={track.images[0].url} alt="avatar" width={300} />
            </li>
            <li>
              <span>{track.name}</span>
            </li>
            <li>
              <span>{track.release_date}</span>
            </li>
          </ul>
        ))
      ) : (
        <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
}
