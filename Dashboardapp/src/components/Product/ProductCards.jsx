import { useEffect } from "react";

function ProductCards() {
  useEffect(function () {
    async function productAPI() {
      let data;
      try {
        const res = await fetch("https://dummyjson.com/products");
        data = await res.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    productAPI();
  }, []);
  return <></>;
}

export default ProductCards;
