import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function NestedComponent() {
  const { theme } = useContext(ThemeContext);
  return <p style={{ color: theme === "dark" ? "#fff" : "#000" }}>Current theme: {theme}</p>;
}

function ToggleButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

export default function UseContextDemo() {
  return (
    <ThemeProvider>
      <NestedComponent />
      <ToggleButton />
    </ThemeProvider>
  );
}
