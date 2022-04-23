import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <div className="App">

      <h1 className="heading">SecureATM</h1>

      <Menu />
      <Footer />

    </div>
  );
}

export default App;
