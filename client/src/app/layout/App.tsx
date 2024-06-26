import { useEffect, useState } from "react";
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    fetch('http://localhost:5140/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  function addProduct(){
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length + 1,
        name: 'product' + (prevState.length + 1), 
        description: '',
        price: (prevState.length * 100) + 100,
        pictureUrl: 'https://picsum.photos/200',
        type: '',
        brand: '',
        quantityInStock: prevState.length * 10
      }])
  }

  return (
    <div>
      <h1>ReStore</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App