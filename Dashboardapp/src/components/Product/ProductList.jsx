import { useEffect, useState } from "react";
import axios from "axios";
import ProductCards from "./ProductCards";

function ProductList() {
  const [products, setProducts] = useState([{}]);

  useEffect(function () {
    async function productAPI() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (err) {
        console.error(err);
      }
    }
    productAPI();
  }, []);
  return (
    <div className="my-4 bg-gray-100 md:grid md:grid-cols-2 md:gap-10 lg:grid lg:grid-cols-3 lg:gap-10 xl:grid xl:grid-cols-4 xl:gap-4">
      {products?.map((product) => (
        <ProductCards
          title={product.title}
          key={product.id}
          price={product.price}
          category={product.category}
          image={product.thumbnail}
        />
      ))}
    </div>
  );
}

export default ProductList;
