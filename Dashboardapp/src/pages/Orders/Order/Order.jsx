import threedots from "../../../assets/icon/threedots.svg";

// border-[#E6EDFF]
function Order({ records }) {
  return (
    <>
      <tbody>
        {records.map((order) => (
          <tr className="  border-b-2 border-[#E6EDFF] " key={order.id}>
            <td className="p-2 align-middle text-center">{order.no}</td>
            <td className="p-2 align-middle text-center">{order.id}</td>
            <td className="p-2 align-middle text-center">{order.date}</td>
            <td className="p-2 align-middle text-center">{order.name}</td>
            <td className="p-2 align-middle text-center">{order.location}</td>
            <td className="p-2 align-middle text-center">{order.amount}</td>
            <td className="p-2 align-middle text-center">{order.status}</td>
            <button className="ps-10 py-2 align-middle">
              <img src={threedots} alt="Action" />
            </button>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default Order;
