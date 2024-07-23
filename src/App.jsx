import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <List />
    </>
  );
}

export default App;
