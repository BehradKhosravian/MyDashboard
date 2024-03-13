import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
function ProductCards({ title, key, price, category, image }) {
  return (
    <>
      <div className="p-8 w-full bg-slate-50 shadow-md transition duration-150 ease-in-out hover:shadow-2xl">
        <img className="h-44 w-full" src={image} alt="image" />
        <div className="p-2">
          <p>
            <b>{title}</b>
          </p>
          <p className="text-sm">Category: {category}</p>
          <p>Price: ${price}.00</p>
        </div>
        <div className="flex justify-around mt-2  ">
          <button className="font-semibold p-2 flex items-center justify-center transition-all ease-in-out duration-300  border border-gray-300 hover:shadow-lg hover:font-bold rounded-lg">
            <EditOutlinedIcon />
            Edit
          </button>
          <button className="text-red-600 p-2 font-semibold flex items-center transition-all ease-in-out duration-300 border border-gray-300 hover:shadow-lg hover:font-bold rounded-lg">
            <DeleteIcon />
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCards;
