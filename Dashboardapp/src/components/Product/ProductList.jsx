import { useEffect, useState } from "react";
import axios from "axios";
import ProductCards from "./ProductCards";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setproductPerPage] = useState(8);
  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProduct = products.slice(firstProductIndex, lastProductIndex);
  const totalProduct = products.length;
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pages.push(i);
  }
  useEffect(() => {
    async function productAPI() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=30"
        );
        setProducts(response.data.products);
      } catch (err) {
        console.error(err);
      }
    }
    productAPI();
  }, []);
  
  return (
    <>
      <div className="my-4 bg-gray-100 md:grid md:grid-cols-2 md:gap-10 lg:grid lg:grid-cols-3 lg:gap-10 xl:grid xl:grid-cols-4 xl:gap-4">
        {currentProduct?.map((product) => (
          <ProductCards
            title={product.title}
            key={product.id}
            price={product.price}
            category={product.category}
            image={product.thumbnail}
          />
        ))}
      </div>
      <div className=" flex justify-center my-6">
        <ul className="flex space-x-3">
          {pages.map((page, index) => (
            <li key={index}>
              <button onClick={() => setCurrentPage(page)}>{page}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
