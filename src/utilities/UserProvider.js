/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

export const UserContext = createContext();

export function UserProvider({ initialState, reducer, children }) {
  return (
    <UserContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </UserContext.Provider>
  );
}

export const GetUserValue = () => useContext(UserContext);
