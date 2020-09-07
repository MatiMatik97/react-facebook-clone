import React from "react";
import "./App.scss";
import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
