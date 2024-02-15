function Product() {
  return (
    <div>
      <h1 className="text-lg font-semibold mb-4 ml-4 pl-3">Products</h1>
      <header className="product-header mx-20 p-4 flex justify-between items-center bg-[#F7F7F7]">
        <input
          className="w-3/12 pl-3 py-1 focus-visible:outline-none 
           border  border-gray-300 rounded-2xl"
          type="text"
          placeholder="Search"
        />
        <div className="selected-option-product flex space-x-6">
          <div className="">
            <select
              className="px-3 py-1  focus-visible:outline-none
              border  border-gray-300 rounded-lg"
              name=""
              id=""
            >
              <option className="" value="" selected disabled hidden>
                Category
              </option>
              <option value="clothes">clothes</option>
              <option value="digital">digital</option>
              <option value="furniture">furniture</option>
            </select>
          </div>
          <div>
            <select
              className="px-3 py-1  focus-visible:outline-none
           border  border-gray-300 rounded-lg"
              name=""
              id=""
            >
              <option className="" value="" selected disabled hidden>
                Sorted By
              </option>
              <option value="clothes">clothes</option>
              <option value="digital">digital</option>
              <option value="furniture">furniture</option>
            </select>
          </div>
        </div>
      </header>
      <main className="main-product mx-20 bg-red-700">asdf</main>
    </div>
  );
}

export default Product;
