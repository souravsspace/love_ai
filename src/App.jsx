import { ThemeProvider } from "@material-tailwind/react";
import Navigation from "./Components/Navigation";
import { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

import Overview from "./Layouts/Overview/Overview";
import Example from "./Layouts/Example/Example";
import Tour from "./Layouts/Tour/Tour";
import Blog from "./Layouts/Blog/Blog";
import Help from "./Layouts/Help/Help";

export const ThemeContext = createContext();

function App() {
  const route = [
    { element: <Overview />, path: "/" },
    { element: <Example />, path: "/example" },
    { element: <Tour />, path: "/tour" },
    { element: <Blog />, path: "/blog" },
    { element: <Help />, path: "/help" },
  ];

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
            {route.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))}
          </Routes>
          <Footer />
        </Router>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
