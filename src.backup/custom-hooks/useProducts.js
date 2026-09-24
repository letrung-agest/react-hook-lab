import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchProducts() {
      setLoading(true);

      // Demo API. In a real app, replace this with your API client.
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      if (!cancelled) {
        setProducts(data.products);
        setLoading(false);
      }
    }

    fetchProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  return { products, loading };
}
