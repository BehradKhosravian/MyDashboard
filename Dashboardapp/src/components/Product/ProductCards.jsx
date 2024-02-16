function ProductCards({ title, key, price, category, image }) {
  return (
    <>
      <div className="">
        <h1>{title}</h1>
        <img className="w-4/12 h-full" src={image} alt="image" />
        <span>{price}$</span>
        <span>Category:{category}</span>
      </div>
    </>
  );
}

export default ProductCards;
