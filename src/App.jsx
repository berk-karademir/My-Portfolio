import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import { ThemeProvider } from "./context/ThemeContext";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css"
function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
