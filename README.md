# React Hooks Lab

Learn the common React Hooks by running each example.

## Important

A Custom Hook is NOT a component. It is a function that can use React Hooks and return reusable state/logic.

The intended flow for the product example is:

Component -> useProducts() -> useEffect() -> API -> setProducts() -> Component re-renders

Do NOT write:

useEffect(() => {
  useProducts();
}, []);

Hooks must be called at the top level of a component or another custom Hook.

## Examples

- useState: state that changes the UI
- useEffect: synchronize with external systems such as API, timer, event listener
- useMemo: cache a calculated value
- useCallback: cache a function reference
- useRef: persist a value/DOM reference without causing a render
- Custom Hook: reuse React logic across components
