import { orderList } from "../../../Data";
function Order() {
  return (
    <div className="flex justify-around">
      {orderList.map((order) => (
        <p key={order.id}>{order.id}</p>
      ))}
    </div>
  );
}

export default Order;
