import { orderList } from "../../../Data";
import threedots from "../../../assets/icon/threedots.svg";
function Order() {
  return (
    <div>
      {orderList.map((order) => (
        <div className="p-4 border-b-2  border-[#E6EDFF]" key={order.id}>
          <div className="flex justify-around ">
            <p>{order.no}</p>
            <p>{order.id}</p>
            <p>{order.date}</p>
            <p>{order.name}</p>
            <p>{order.location}</p>
            <p>{order.amount}</p>
            <p>{order.status}</p>
            <button>
              <img src={threedots} alt="Action" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
