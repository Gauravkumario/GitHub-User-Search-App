import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";

function App() {
  return (
    <div
      className="App flex flex-col justify-center item-center h-screen m-auto"
      role="main"
    >
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
