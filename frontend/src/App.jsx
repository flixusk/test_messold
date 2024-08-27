import { useEffect, useState } from 'react';
import './index.css'; 

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopify Products</h1>
      <h5>i don't have store Name so i the request featching is not working</h5>
      <h5>Link to my github repo to change the store name <a  className= 'underline' href='https://github.com/flixusk/Messold_TEST'>CLICK HERE</a></h5>
      {loading && <p className="text-lg">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {products.length > 0 && (
        <ul>
          {products.map((product) => (
            <li key={product.id} className="mb-4 p-4 border border-gray-200 rounded">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="mt-2">{product.body_html}</p>
              <p className="mt-2"><strong>Category:</strong> {product.product_type}</p>
              <p className="mt-2"><strong>Tags:</strong> {product.tags}</p>
              <ul className="mt-4">
                {product.variants.map((variant) => (
                  <li key={variant.id} className="mt-2">
                    <p><strong>Variant Title:</strong> {variant.title}</p>
                    <p><strong>Price:</strong> {variant.price}</p>
                    <p><strong>Compared Price:</strong> {variant.compare_at_price}</p>
                    <p><strong>SKU:</strong> {variant.sku}</p>
                    <p><strong>Quantity:</strong> {variant.inventory_quantity}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
