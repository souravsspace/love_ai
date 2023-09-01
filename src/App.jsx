import { ThemeProvider } from "@material-tailwind/react";
import Navigation from "./Components/Navigation";
import { createContext } from "react";

export const ThemeContext = createContext();

function App() {
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
      <ThemeContext.Provider value={{ BtnEffect }}>
        <Navigation />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
