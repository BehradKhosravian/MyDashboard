import { orderList } from "../../../Data";
import threedots from "../../../assets/icon/threedots.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// border-[#E6EDFF]
function Order() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = orderList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(orderList.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage  !== 10) {
      setCurrentPage(currentPage + 1);
      console.log(currentPage);
    }
  }

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
      <div className="mt-3 mb-12 ">
        <ul className="">
          <li>
            <NavLink to="" onClick={() => prePage()}>
              Prev
            </NavLink>
          </li>
          {numbers.map((number, i) => (
            <li key={i}>
              <NavLink to="" onClick={() => changePage(number)}>
                {number}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="" onClick={() => nextPage()}>
              Next
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Order;
