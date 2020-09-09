import React, {
  createContext,
  Dispatch,
  Reducer,
  useContext,
  useReducer,
} from "react";
import { UserInfo } from "firebase";

// TYPES AND INTERFACES

export enum UserActionTypes {
  SET_USER = "SET_USER",
}
interface UserActions {
  type: string;
  payload: any;
}

interface UserProps {
  user: UserInfo | null;
}
interface UserProviderProps {
  reducer: Reducer<UserProps, UserActions>;
  initialState: UserProps;
  children: JSX.Element;
}

interface UserContextProps {
  state: UserProps;
  dispatch: Dispatch<UserActions>;
}

// REDUCER

export const UserReducer: Reducer<UserProps, UserActions> = (state, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

// CONTEXT

export const userInitialState: UserProps = {
  user: null,
};

export const UserContext = createContext({} as UserContextProps);

export const UserProvider: React.FC<UserProviderProps> = ({
  reducer,
  initialState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
