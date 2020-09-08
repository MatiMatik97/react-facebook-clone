import React from "react";
import "./App.scss";
import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import Feed from "./layout/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import Login from "./components/Login/Login";
import { useUserContext } from "./contexts/UserContext";

const App: React.FC = () => {
  const {
    state: { user },
  } = useUserContext();

  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
