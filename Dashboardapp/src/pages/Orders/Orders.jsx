// border-[#E6EDFF]
import { useState } from "react";
import Pagination from "../../components/Pagination";
import { orderList } from "../../Data";
import Order from "./Order/Order";
import TableHeader from "../../components/Table/TableHeader";
function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = orderList.slice(firstIndex, lastIndex);
  const lastPage = Math.ceil(orderList.length / recordsPerPage);
  const numbers = [...Array(lastPage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== lastPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <div className="overflow-x-auto">
        <h1 className="ml-4 text-xl font-semibold">Order List</h1>
        <table className="w-full text-sm lg:text-lg ">
          <TableHeader>
            <tr className="border-b-2 border-[#E6EDFF]">
              <th className="px-3 py-2 ">No</th>
              <th className="px-3 py-2 ">ID</th>
              <th className="px-3 py-2 ">Date</th>
              <th className="px-3 py-2 ">Customer Name</th>
              <th className="px-3 py-2 ">Location</th>
              <th className="px-3 py-2 ">Amount</th>
              <th className="px-3 py-2 ">Status Order</th>
              <th className="px-3 py-2 ">Action</th>
            </tr>
          </TableHeader>
          <Order records={records} />
        </table>
      </div>

      <Pagination
        prePage={prePage}
        changePage={changePage}
        nextPage={nextPage}
        numbers={numbers}
      />
    </>
  );
}

export default Orders;
