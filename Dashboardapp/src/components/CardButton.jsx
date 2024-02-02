import { Link } from "react-router-dom";
function CardButton({ icon }) {
  return (
    <div className="btn-containe rounded-xl shadow">
      <Link to={`/`}>
        <button className="p-3">
          <img src={icon} alt={icon} />
        </button>
      </Link>
    </div>
  );
}

export default CardButton;
