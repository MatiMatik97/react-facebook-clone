import React, { createContext, useContext, useReducer } from "react";
import * as firebase from "firebase";

// TYPES AND INTERFACES

enum ActionTypes {
  SET,
}

type Actions = { type: ActionTypes.SET; payload: object };

interface User {
  user: object | null;
}

interface UserProviderProps {
  reducer: (state: User, action: Actions) => User;
  initialState: User;
  children: JSX.Element;
}

// USER REDUCER

const UserReducer = (state: User, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SET:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default UserReducer;

// USER CONTEXT

export const userInitialState: User = {
  user: null,
};

const UserContext = createContext<User | any>(userInitialState);

export const UserProvider: React.FC<UserProviderProps> = ({
  reducer,
  initialState,
  children,
}) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);

export const useUserContext = () => useContext(UserContext);

// HELPER FUNCTIONS

export const setUser = (user: firebase.User | null) => {
  return {
    type: ActionTypes.SET,
    payload: user,
  };
};
