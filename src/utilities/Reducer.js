export const initialState = {
  token: null,
  userInfo: null,
  playlists: [],
  currentPlaying: null,
  playerState: false,
  selectedPlaylist: null,
  selectedPlaylistId: "37i9dQZF1E37jO8SiMT0yN",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token:
          "BQCAtfZq4-LLrJWnbXgGKXICIhXZM2Jhr3TOmhjI1iWpujEkEzuuIDTXo6phqq9a-wshbLjlHHyhlAzlaXjDOBLaQGXCqCPukd4wN0BrEymDxh0-bV6Pjsbf_gaPyICZBBMDhsM9IldowXoxxv-99Uj0xnb6RvUVpyu90NP5HLqsc_uACtCGUTihTVV81uRjzRsmOinqzbdXaFCufFaH6TDHss81wUwBZolCqkIEfGzdOB4wRwkhQzj3PQnpO4FD",
      };
    case "SET_USER":
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_PLAYING":
      return {
        ...state,
        currentPlaying: action.currentPlaying,
      };
    case "SET_PLAYER_STATE":
      return {
        ...state,
        playerState: action.playerState,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    case "SET_PLAYLIST_ID":
      return {
        ...state,
        selectedPlaylistId: action.selectedPlaylistId,
      };
    default:
      return state;
  }
};

export default reducer;
