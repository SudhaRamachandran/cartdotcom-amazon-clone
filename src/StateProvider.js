import React, { createContext, useContext, useReducer } from "react";

// Prepares the Data Layer
export const StateContext = createContext();

// Wrap ouur app and provide the Data Layer to any component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull data from the Data Layer
export const useStateValue = () => useContext(StateContext);
