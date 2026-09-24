import { useCallback, useState } from "react";
import ProductDetail from "./ProductDetail";

export default function Product() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("light");

    const handleClick = useCallback(() => {
        console.log("Buy product");
    }, [theme]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Theme: {theme}</p>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>

            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>

            <br />
            <ProductDetail onClick={handleClick} />
        </div>
    );
}