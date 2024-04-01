import ProductList from "../../components/Product/ProductList";

function Product() {
  return (
    <div>
      {/* <h1 className="text-lg font-semibold mb-4 ml-10 pl-3">Products</h1> */}
      <header className="product-header md:mx-20 p-4 flex justify-between items-center bg-[#F7F7F7]">
        <input
          className="w-20 md:w-4/12 focus-visible:outline-none 
           border  border-gray-300 rounded-2xl"
          type="text"
          placeholder="Search"
        />
        <div className="selected-option-product flex space-x-6">
          <div className="">
            <select
              className=" w-full py-1  focus-visible:outline-none
              border  border-gray-300 rounded-lg"
              name=""
              id=""
            >
              <option className="" value="" selected disabled hidden>
                Category
              </option>
              <option className="text-start" value="clothes">
                Laptops
              </option>
              <option className="text-start" value="digital">
                Smartphones
              </option>
              <option className="text-start" value="furniture">
                Fragrances
              </option>
            </select>
          </div>
          <div>
            <select
              className="py-1 w-full focus-visible:outline-none
           border  border-gray-300 rounded-lg"
              name=""
              id=""
            >
              <option className="" value="" selected disabled hidden>
                Sorted By
              </option>
              <option value="clothes">Price(increase)</option>
              <option value="digital">Time</option>
            </select>
          </div>
        </div>
      </header>
      <main className="main-product bg-gray-100 md:mx-20 mt-10 border border-gray-300 rounded-md px-3 mb-10">
        <ProductList />
      </main>
    </div>
  );
}

export default Product;
