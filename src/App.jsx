import { ThemeProvider } from "@material-tailwind/react";
import Navigation from "./Components/Navigation";
import { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

export const ThemeContext = createContext();

function App() {
  const NavEffect = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const chiildNavEffect = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: "10vh",
      opacity: 0,
    },
  };

  const BtnEffect = {
    tap: {
      scale: 0.93,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    hover: {
      scale: 1.03,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };
  return (
    <ThemeProvider>
      <ThemeContext.Provider value={{ BtnEffect, NavEffect, chiildNavEffect }}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<h1>'test'</h1>} />
          </Routes>
          <Footer />
        </Router>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
