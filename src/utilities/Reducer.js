export const initialState = {
  token: null,
  userInfo: null,
  playlists: [],
  currentPlaying: null,
  selectedPlaylist: null,
  selectedPlaylistId: "37i9dQZF1E37jO8SiMT0yN",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_USER":
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    case "SET_PLAYLIST_ID":
      return {
        ...state,
        playlistId: action.playlistId,
      };
    case "SET_CONTEXT_URI":
      return {
        ...state,
        contextUri: action.contextUri,
      };
    default:
      return state;
  }
};

export default reducer;
