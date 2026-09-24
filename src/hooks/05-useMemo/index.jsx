import { useMemo, useState } from "react";
import ProductList from "./ProductList";

export default function UseMemoTab() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const products = useMemo(() => [
    { id: 1, name: "Laptop", price: 2000 },
    { id: 2, name: "Phone", price: 1000 },
    { id: 3, name: "Mouse", price: 50 },
    { id: 4, name: "Keyboard", price: 100 },
  ], []);

  const [search, setSearch] = useState("");
  const opt = useMemo(() => ({
    theme,
  }), [theme]);

  const result = useMemo(() => {
    console.log("Calculation...");
    return `Current theme: ${opt.theme}`;
  }, [opt]);

  const filterPro = useMemo(() => {
    console.log("filter start");
    return products.filter(p =>
      p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search]);

  return (
    <div className="hook-tab">
      <p>Count: {count}</p>
      <p>Result: {result}</p>
      <p>Theme: {theme}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>

      <br />
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

      <h3>Product list</h3>
      <ProductList products={products} />
    </div>
  );
}