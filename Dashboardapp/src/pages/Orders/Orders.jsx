// border-[#E6EDFF]
import { useState } from "react";
import Pagination from "../../components/Pagination";
import { orderList } from "../../Data";
import Order from "./Order/Order";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import TableHeadItems from "../../components/Table/TableHeadItems";
import Table from "../../components/Table/Table";
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
        <Table className="w-full text-sm lg:text-lg ">
          <TableHeader>
            <TableRow className="border-b-2 border-[#E6EDFF]">
              <TableHeadItems className="px-3 py-2 ">No</TableHeadItems>
              <TableHeadItems className="px-3 py-2 ">ID</TableHeadItems>
              <TableHeadItems className="px-3 py-2 ">Date</TableHeadItems>
              <TableHeadItems className="px-3 py-2 ">
                Customer Name
              </TableHeadItems>
              <TableHeadItems className="px-3 py-2 ">Location</TableHeadItems>
              <TableHeadItems className="px-3 py-2 ">Amount</TableHeadItems>
              <TableHeadItems className="px-3 py-2 ">
                Status Order
              </TableHeadItems>
              <TableHeadItems className="px-3 py-2 ">Action</TableHeadItems>
            </TableRow>
          </TableHeader>
          <Order records={records} />
        </Table>
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
