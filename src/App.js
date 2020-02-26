import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";

function App() {
  return (
    <>
      <Title />
      <NavBar />
      <Router>
        <HomePage path="/" />
        <StudentList path="/students" />
      </Router>
      <Footer />
    </>
  );
}

export default App;
