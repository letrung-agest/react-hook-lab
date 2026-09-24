import { useState } from "react";
import "./styles.css";
import UseStateTab from "./hooks/01-useState";
import UseEffectTab from "./hooks/02-useEffect";
import UseContextTab from "./hooks/03-useContext";
import UseReducerTab from "./hooks/04-useReducer";
import UseMemoTab from "./hooks/05-useMemo";
import UseCallbackTab from "./hooks/06-useCallback";
import UseRefTab from "./hooks/07-useRef";

const hookTabs = [
  { id: 1, name: "useState", label: "1. useState", component: UseStateTab },
  { id: 2, name: "useEffect", label: "2. useEffect", component: UseEffectTab },
  { id: 3, name: "useContext", label: "3. useContext", component: UseContextTab },
  { id: 4, name: "useReducer", label: "4. useReducer", component: UseReducerTab },
  { id: 5, name: "useMemo", label: "5. useMemo", component: UseMemoTab },
  { id: 6, name: "useCallback", label: "6. useCallback", component: UseCallbackTab },
  { id: 7, name: "useRef", label: "7. useRef", component: UseRefTab },
  { id: 8, name: "useLayoutEffect", label: "8. useLayoutEffect (Coming Soon)" },
  { id: 9, name: "useDebugValue", label: "9. useDebugValue (Coming Soon)" },
  { id: 10, name: "useTransition", label: "10. useTransition (Coming Soon)" },
  { id: 11, name: "useDeferredValue", label: "11. useDeferredValue (Coming Soon)" },
  { id: 12, name: "useSyncExternalStore", label: "12. useSyncExternalStore (Coming Soon)" },
  { id: 13, name: "useInsertionEffect", label: "13. useInsertionEffect (Coming Soon)" },
  { id: 14, name: "useId", label: "14. useId (Coming Soon)" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [showNav, setShowNav] = useState(false);
  const ActiveTab = hookTabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className="App">
      <header className="app-header">
        <h1>⚛️ React Hooks Learning Lab</h1>
        <button className="nav-toggle" onClick={() => setShowNav(!showNav)}>
          {showNav ? "Hide Hooks" : "Show Hooks"}
        </button>
      </header>

      <div className="container">
        {showNav && (
          <nav className="hooks-nav">
            <h3>Hooks</h3>
            <div className="nav-buttons">
              {hookTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`nav-btn ${activeTab === tab.id ? "active" : ""} ${
                    tab.id > 7 ? "coming-soon" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  disabled={tab.id > 7}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </nav>
        )}

        <main className="main-content">
          {ActiveTab ? <ActiveTab /> : null}

          {activeTab > 7 && (
            <div className="coming-soon">
              <h2>🚧 Coming Soon</h2>
              <p>{hookTabs.find((t) => t.id === activeTab)?.label}</p>
              <p>More hooks will be added soon. Start with useState!</p>
            </div>
          )}
        </main>
      </div>

      <footer className="app-footer">
        <p>💡 Open DevTools (F12) to see console logs and understand what's happening</p>
        <p>
          📚 Reference:{" "}
          <a href="https://react.dev/reference/react" target="_blank" rel="noopener noreferrer">
            react.dev/reference/react
          </a>
        </p>
      </footer>
    </div>
  );
}
