import React, { useEffect, useState } from "react";
import AlphabetProvider from "./contexts/AlphabetContext";
import Home from "./views/Home/Home";
import "./assets/styles/App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches);

    const handleChange = (e) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <AlphabetProvider>
      <div className={`container ${darkMode ? "theme-dark" : "theme-light"}`}>
        <main>
          <Home />
        </main>
      </div>
    </AlphabetProvider>
  );
};

export default App;
