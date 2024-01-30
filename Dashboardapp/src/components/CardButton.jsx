function CardButton({ icon }) {
  return (
    <div className="btn-containe rounded-xl shadow">
      <button className="p-3">
        <img src={icon} alt={icon} />
      </button>
    </div>
  );
}

export default CardButton;
