import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css";

const clientsList = true;

function App() {
  return (
    <>
      <Nav />
      <Header />
      {clientsList ? <List /> : ""}
    </>
  );
}

export default App;
