import React from "react";
import "./App.scss";
import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import Feed from "./layout/Feed/Feed";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default App;
