import { Link } from "react-router-dom";
function CardButton({ icon, title }) {
  return (
    <div className="btn-containe rounded-xl shadow mt-2">
      <Link
        to={`/${
          title === "users"
            ? "orders"
            : title === "products"
            ? "product"
            : title === "checked"
            ? "checkout"
            : "asdf"
        }`}
      >
        <button className="p-3 lg:size-10">
          <img className="" src={icon} alt={icon} />
        </button>
      </Link>
    </div>
  );
}

export default CardButton;
