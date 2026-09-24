import { useInsertionEffect, useState } from "react";

export default function UseInsertionEffectDemo() {
  const [color, setColor] = useState("red");

  // useInsertionEffect chạy TRƯỚC useLayoutEffect và useEffect
  // Dùng chủ yếu cho CSS-in-JS libraries
  useInsertionEffect(() => {
    console.log("useInsertionEffect: chạy TRƯỚC tất cả effects");
    // Ví dụ: inject CSS vào DOM
    const style = document.createElement("style");
    style.textContent = `
      .color-box {
        width: 100px;
        height: 100px;
        background-color: ${color};
        transition: background-color 0.3s;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      document.head.removeChild(style);
    };
  }, [color]);

  return (
    <div>
      <div className="color-box" />
      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>Toggle Color</button>
      <p style={{ fontSize: "12px", color: "#666" }}>
        useInsertionEffect is mainly for CSS-in-JS. Check console for execution order.
      </p>
    </div>
  );
}
