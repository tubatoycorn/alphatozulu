import { useEffect, useState } from "react";
import AlphabetProvider from "./contexts/AlphabetContext";
import Home from "./views/Home/Home";
import "./assets/styles/App.css";

const App = () => {
    const [darkMode, setDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e) => setDarkMode(e.matches);

        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <AlphabetProvider>
            <div className={`container theme-${darkMode ? "dark" : "light"}`}>
                <main>
                    <Home />
                </main>
            </div>
        </AlphabetProvider>
    );
};

export default App;
