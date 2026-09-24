import { useProducts } from "./useProducts";

function Dashboard() {
  const { products, loading } = useProducts();

  return (
    <div>
      <h3>Dashboard</h3>
      {loading ? <p>Loading...</p> : <p>Total products: {products.length}</p>}
    </div>
  );
}

function ProductPage() {
  const { products, loading } = useProducts();

  return (
    <div>
      <h3>Product Page</h3>
      {loading
        ? <p>Loading...</p>
        : <p>First product: {products[0]?.title}</p>}
    </div>
  );
}

export default function CustomHookDemo() {
  return (
    <div>
      <Dashboard />
      <ProductPage />
    </div>
  );
}
