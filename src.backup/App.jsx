import "./styles.css";
import UseStateDemo from "./react-hooks/UseStateDemo";
import UseEffectDemo from "./react-hooks/UseEffectDemo";
import UseContextDemo from "./react-hooks/UseContextDemo";
import UseReducerDemo from "./react-hooks/UseReducerDemo";
import UseMemoDemo from "./react-hooks/UseMemoDemo";
import UseCallbackDemo from "./react-hooks/UseCallbackDemo";
import UseRefDemo from "./react-hooks/UseRefDemo";
import UseLayoutEffectDemo from "./react-hooks/UseLayoutEffectDemo";
import UseDebugValueDemo from "./react-hooks/UseDebugValueDemo";
import UseTransitionDemo from "./react-hooks/UseTransitionDemo";
import UseDeferredValueDemo from "./react-hooks/UseDeferredValueDemo";
import UseSyncExternalStoreDemo from "./react-hooks/UseSyncExternalStoreDemo";
import UseInsertionEffectDemo from "./react-hooks/UseInsertionEffectDemo";
import UseIdDemo from "./react-hooks/UseIdDemo";
import CustomHookDemo from "./custom-hooks/CustomHookDemo";

export default function App() {
  return (
    <div className="App">
      <h1>React Hooks Lab</h1>
      <p>Open DevTools and change the examples to understand each Hook. React 18+ supported!</p>

      <section><h2>1. useState</h2><UseStateDemo /></section>
      <section><h2>2. useEffect</h2><UseEffectDemo /></section>
      <section><h2>3. useContext</h2><UseContextDemo /></section>
      <section><h2>4. useReducer</h2><UseReducerDemo /></section>
      <section><h2>5. useMemo</h2><UseMemoDemo /></section>
      <section><h2>6. useCallback</h2><UseCallbackDemo /></section>
      <section><h2>7. useRef</h2><UseRefDemo /></section>
      <section><h2>8. useLayoutEffect</h2><UseLayoutEffectDemo /></section>
      <section><h2>9. useDebugValue</h2><UseDebugValueDemo /></section>
      <section><h2>10. useTransition</h2><UseTransitionDemo /></section>
      <section><h2>11. useDeferredValue</h2><UseDeferredValueDemo /></section>
      <section><h2>12. useSyncExternalStore</h2><UseSyncExternalStoreDemo /></section>
      <section><h2>13. useInsertionEffect</h2><UseInsertionEffectDemo /></section>
      <section><h2>14. useId</h2><UseIdDemo /></section>
      <section><h2>15. Custom Hook</h2><CustomHookDemo /></section>
    </div>
  );
}
